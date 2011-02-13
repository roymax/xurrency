Titanium.UI.setBackgroundColor('#FFF'); 

var main = Titanium.UI.createWindow({title: 'Xurrency', visible: false }); 
Ti.include('database.js'); 
Ti.include('ui.js');                                                       
if ( Ti.Network.online) {
   //initRates();	
}

Ti.include('events.js');  
main.open({fullscreen:false});  

while (true) {
	if (true) {
		Ti.App.fireEvent('loaded');
		break;	
	}
}
   
                            