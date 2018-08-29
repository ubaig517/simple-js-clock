const runClock = () => {
  const date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let period = (hr < 12) ? 'AM' : 'PM';
  const clockDisplay = document.querySelector('#clock_display');

  if (hr === 0) {
    hr = 12;
  }

  if (hr > 12) {
    hr-=12;
  }

  hr = (hr < 10) ? '0' + hr : hr;
  min = (min < 10) ? '0' + min : min;
  sec = (sec < 10) ? '0' + sec : sec;

  const time = `${hr}:${min}:${sec} ${period}`;

  clockDisplay.innerHTML = time;
}
runClock();
window.setInterval(runClock, 1000);
