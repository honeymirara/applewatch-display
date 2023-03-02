function updateTime() {
    try {
        const timeTag = new Date();
        document.querySelector('.time').innerHTML = timeTag.toLocaleTimeString();

    } catch (err) {
        alert(err.message);
    }

}

setTimeout(updateTime, 1000);

