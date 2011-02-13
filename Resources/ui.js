var currencyPicker = Ti.UI.createPicker();        
currencyPicker.selectionIndicator = true;     

var pickerView = Titanium.UI.createView({
   bottom:0,
   height:120
});
pickerView.add(currencyPicker);

main.add(pickerView);    

//初始化picker
initPicker();

//add label 
var source_label = Ti.UI.createLabel({
   	top: 70,
   	width: 'auto',
	height: 'auto',
	shadowColor:'#AAAAAA',
	font: {fontSize: 18, fontWeight: 'bold'  },
	color:'#000',
	textAlign: 'left',    
	left:120 
}); 
main.add(source_label);  


var source_image = Ti.UI.createImageView({
	width:128,
	height:128,
	top: 45,
	left: 0
});
main.add(source_image);

var target_label = Ti.UI.createLabel({
   	top: 180,
   	width: 'auto',
	height: 'auto',  
	font: {fontSize: 18, fontWeight: 'bold'  },   
	shadowColor:'#AAAAAA',   
	color:'#000',
	textAlign: 'left',  
	left:120   
});
main.add(target_label); 

var target_image = Ti.UI.createImageView({
	width:128,
	height:128,
	top: 160,
	left: 0
});
main.add(target_image);
      
   

var result = Ti.UI.createLabel({
	text: '0',
	top: 210,   
	font: {fontSize: 24, fontWeight: 'bold'  },   
	width: 'auto',
	height: 'auto', 
	minimumFontSize: 12,   
	color:'#336699', 
	left:120
});
main.add(result);


var base_input = Titanium.UI.createTextField({ 
	hintText: '按此输入金额',
	color:'#336699', 
	backgroundColor:'#888',
	font: {fontSize: 24, fontWeight: 'bold'  }, 
	height: 26, 
	minimumFontSize: 12,
	top:110,
	left:120,
	width:180, 
	//opacity: 0.5,  
	//touchEnabled: true,
	// size: 10, 
	keyboardType:Titanium.UI.KEYBOARD_NUMBER_PAD,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_NONE,
    clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS
});
main.add(base_input);

//menu toolbar
var flexSpace = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});
var about = Titanium.UI.createButton({
	title:'about',
	style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED		
});   


var appName = Ti.UI.createLabel({
   	text: 'Xurrency',  
	font: {fontSize: 18, fontWeight: 'bold' },
   	width: 'auto',
	height: 'auto',     
	shadowColor:'#aaa',   
	color:'#FFF',
	textAlign: 'left'
});
var toolbar = Titanium.UI.createToolbar({
	items:[appName,flexSpace,about],
	top:0,     
	borderTop:true,
	borderBottom:true,
	barColor:'#336699'
});
main.add(toolbar);
//toolbar end
                          
