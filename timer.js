function updateTimer() {
  future  = Date.parse("July 1, 2023 17:00:00");
  now     = new Date();
  diff    = future - now;

  days  = Math.floor( diff / (1000*60*60*24) );
  hours = Math.floor( diff / (1000*60*60) );
  mins  = Math.floor( diff / (1000*60) );
  secs  = Math.floor( diff / 1000 );

  d = days;
  h = hours - days  * 24;
  m = mins  - hours * 60;
  s = secs  - mins  * 60;

  document.getElementById("timer")
    .innerHTML =
      '<div>' + d + '<span>dagar</span></div>' +
      '<div>' + h + '<span>klukkustundir</span></div>' +
      '<div>' + m + '<span>mínútur</span></div>' +
      '<div>' + s + '<span>sekúndur</span></div>' ;
}
setInterval('updateTimer()', 1000 );
