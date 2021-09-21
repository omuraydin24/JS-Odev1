const getGuestName = () => {
  const name = prompt('Adınız nedir?', 'Misafir');
  document.querySelector('#name').innerText = name;
}




function showTime() {

  var time = new Date();

  // document.getElementById("time-box").innerHTML = saat.toLocaleTimeString();

  document.querySelector("#time-box").innerHTML = time.toLocaleTimeString();
  
  var weekday = new Array(7);
  weekday[0] = "Pazar";
  weekday[1] = "Pazartesi";
  weekday[2] = "Salı";
  weekday[3] = "Çarşamba";
  weekday[4] = "Perşembe";
  weekday[5] = "Cuma";
  weekday[6] = "Cumartesi";

  var n = weekday[time.getDay()];
  document.querySelector("#demo").innerHTML = n;
}

getGuestName();
setInterval(showTime, 1000);