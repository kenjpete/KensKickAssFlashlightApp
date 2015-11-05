//scripts.js
//What platform the device is: returned when function CheckDevice is called in the document onReady 
//var devicePlatform;

//Other functions
//function CheckDevice() {
//    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
//        return ("iOS");
//    } else if (navigator.userAgent.match(/Android/)) {
//        return ("Android");
//    } else {
//        return ("unknown");
//    }
//}

//device ready function
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    //devicePlatform = CheckDevice();
    //$("#DivDevice").html("Device: " + devicePlatform);
    $("#DivButtons").show();
}

//
$("#btnToggleLight").click(function(){
    if (this.value == "Turn Light ON") {
        TurnOnFlashLight();
        this.value = "Turn Light OFF"
    } else {
        TurnOffFlashLight();
        this.value = "Turn Light ON"
    }

});

function TurnOnFlashLight() {
    window.plugins.flashlight.switchOn();

}

function TurnOffFlashLight() {

    window.plugins.flashlight.switchOff();
}