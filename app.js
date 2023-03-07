
class AppleWatch{
    constructor(){
        setInterval(this.updateTime, 1000);
    }

    updateTime() {
        try {
            let timeTag = new Date();
            document.querySelector('.time').innerHTML = timeTag.toLocaleTimeString();
    
        } catch (err) {
            alert(err.message);
        }
    
    }
}

 const appleWatch = new AppleWatch() ;
 

