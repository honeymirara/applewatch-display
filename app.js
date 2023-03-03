function updateTime() {
    try {
        let timeTag = new Date();
        document.querySelector('.time').innerHTML = timeTag.toLocaleTimeString();

    } catch (err) {
        alert(err.message);
    }

}
 
 setInterval(updateTime, 1000); 


/* let timerId = setTimeout(function updateTime() {
    timerId = setTimeout(updateTime, 2000);
  }, 2000); */
  

