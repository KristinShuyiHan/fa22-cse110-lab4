function recordTime() {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}
setInterval(recordTime, 1000);
