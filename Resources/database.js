var db = Titanium.Database.install('db.sqlite','xurrency');

function updatedSaved(flag,value) { 
	if (flag == 'base' ) {
	   	db.execute('UPDATE SAVED set base = ? ', value);
		Titanium.API.debug('saved SAVED base = ' + value); 
	} else if (flag =='target'){
		db.execute('UPDATE SAVED set target = ? ', value);
		Titanium.API.debug('saved SAVED target = ' + value); 
	} else if (flag == 'value'){
		 db.execute('UPDATE SAVED set value = ? ', value);
		 Titanium.API.debug('saved SAVED value = ' + value);
	}

}

function getSaved(){
	var rows = db.execute('SELECT * FROM SAVED'); 
	Titanium.API.debug('SAVED ROW COUNT = ' + rows.getRowCount()); 	
	while (rows.isValidRow()) { 
		Titanium.API.debug("SAVED BASE: " + rows.field(1)  + " | TARGET: " + rows.field(2) + " | VALUE: " + rows.field(3)  );     
		return [rows.field(1),rows.field(2),rows.field(3)];
	}          
	rows.close();
	return [0,0,0];   
}

function findAllCurrencies() {
	
}


function initPicker() {
	var rows = db.execute('SELECT * FROM CURRENCIES WHERE stat = 1 order by code');
	var column1 = Ti.UI.createPickerColumn({opacity:0.3});
	var column2 = Ti.UI.createPickerColumn({opacity:0.3}); 
                                     
    while (rows.isValidRow())
	{      
		code = rows.field(1);
		name = rows.field(2);
		imgpath = "images/flag/"+code+".png";
		column1.addRow(Ti.UI.createPickerRow({title:code,fullname: name, img: imgpath}));    
		column2.addRow(Ti.UI.createPickerRow({title:code,fullname: name, img: imgpath}));  
		rows.next(); 
	} 

	//关闭rows
	currencyPicker.add([column1,column2]); 
	rows.close();	
}  

function selectRate(base,target) {   
	Titanium.API.debug("select BASE: " + base + " | TARGET: " + target  );
	var row = db.execute('SELECT * FROM RATES WHERE BASE = \''+ base + '\' and TARGET = \''+ target +'\'');
   	
	Titanium.API.debug('ROW COUNT = ' + row.getRowCount());     
	while (row.isValidRow()) {
	    Titanium.API.debug("BASE: " + row.field(1) + " | TARGET: " + row.field(2)  + " | RATE: " + row.field(3));
	 	
		return row.field(3);
	}           
	row.close();
	return NaN; 
}

function updateRate(code) {
	var xhr = Ti.Network.createHTTPClient({onload : function() {
		var doc = this.responseXML.documentElement;   
		var items = doc.getElementsByTagName("item");
		for (var c=0;c<items.length;c++){
			var item = items.item(c); 
			var base = item.getElementsByTagName("dc:baseCurrency").item(0).text;
			var target = item.getElementsByTagName("dc:targetCurrency").item(0).text;
			var rate = item.getElementsByTagName("dc:value").item(0).text;                          
		    db.execute('INSERT INTO RATES ( BASE, TARGET,RATE ) VALUES(?,?,?)',base,target,rate); 
			Titanium.API.debug("BASE: " + base + " | TARGET: " + target  + " | RATE: " + rate );
		}
		var count = db.execute('SELECT * FROM RATES');
		Titanium.API.debug('ROW COUNT = ' + count.getRowCount()); 
	}});
	//获取所有数据，保存到db?
	xhr.open("GET","http://xurrency.com/"+ code.toLowerCase() +"/feed", true);
    xhr.send();	
}

function initRates() {
	// db.execute('CREATE TABLE IF NOT EXISTS RATES (ID INTEGER PRIMARY KEY AUTOINCREMENT, BASE TEXT,TARGET TEXT, RATE REAL)');  
	db.execute('DELETE FROM RATES'); 
	var rows = db.execute('SELECT * FROM CURRENCIES WHERE stat = 1');  
	
	while (rows.isValidRow()) {
		var code = rows.field(1);	
	   	
   		updateRate(code);
		rows.next();      
	}     
	//关闭rows
	rows.close();  	
} 


       
     