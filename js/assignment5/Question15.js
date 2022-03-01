function displayTime() {

    var x = new Date();
    var ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';
    hours = x.getHours( ) % 12;
    hours = hours ? hours : 12;
    var x1= x.getFullYear() + "-" + x.getMonth() + "-" + x.getDate() + " " ; 
     x1 = x1 +hours + ":" +  x.getMinutes() + ":" +  x.getSeconds() + ":" + ampm;
    document.getElementById('ct6').innerHTML = x1;
    display();
 }

 function display(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('displayTime()',refresh)
    }
    display()