//事件
Ti.App.addEventListener('loaded', function(e){
	main.show();
});

currencyPicker.addEventListener('change',function(e){
	base = currencyPicker.getSelectedRow(0);
	target = currencyPicker.getSelectedRow(1);
	source_label.text = base.fullname;
	source_image.image = base.img;
	target_label.text = target.fullname;
 	target_image.image = target.img;    

    Ti.API.debug(base);  
	Ti.API.debug(target); 
	if (base.title == target.title) {
	   // if (base_input.hasText()) {
			result.text = (base_input.value * 0.01).toFixed(2);
		// } else {
		// 			result.text = 0;
		// 		} 
	} else {                                  
		rate = selectRate(base.title , target.title); 
		Ti.API.debug("rate is " + rate );
		result.text = (base_input.value * rate).toFixed(2);  
	}
	if (e.columnIndex == 0){
		updatedSaved('base', e.rowIndex);	
	} else {
		updatedSaved('target', e.rowIndex);	
	}
    
});    

base_input.addEventListener('change',function(e) {
	if (e.value.length > 10) {
		base_input.value = e.value.substr(0,10);
		return;
	} 
	base = currencyPicker.getSelectedRow(0).title;    
	target = currencyPicker.getSelectedRow(1).title;
 	
    Ti.API.debug(base);  
	Ti.API.debug(target); 
	if (base == target) {
		// if (base_input.hasText()) {
			result.text = (base_input.value * 0.01).toFixed(2);
		// } else {
			// result.text = 0;
		// }
		
	} else {                                  
		rate = selectRate(base,target); 
		Ti.API.debug("rate is " + rate );
		result.text = (base_input.value * rate).toFixed(2);
	}
	updatedSaved('value', base_input.value);	      
}); 


about.addEventListener('click',function(e){
   	Titanium.UI.createAlertDialog({title:'About',message:'Copyright 2011 Roy <roymax@gmail.com>'}).show();     
}); 



main.addEventListener('open',function(e){   
	Ti.API.debug('open');  
	saved = getSaved();  
	Ti.API.debug('main is opened, selected is : ' + saved);  
	currencyPicker.setSelectedRow(0,saved[0],false);
	currencyPicker.setSelectedRow(1,saved[1],false);
	if (saved[2] != 0) {
		base_input.value = saved[2];
	}                               
});  

main.addEventListener('focus',function(e){    
	Ti.API.debug('focus');  
});

main.addEventListener('click', function()
{
	base_input.blur();
});   
