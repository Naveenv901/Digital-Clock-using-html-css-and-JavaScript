document.addEventListener('DOMContentLoaded', () => {
    const timeElement = document.getElementById('time');

    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        let val="AM"
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        if(hours==12 && val=="AM"){
            hours=hours;
        }
        else if(hours>11){
            hours-=12;
            hours = hours < 10 ? '0' + hours : hours;
            val="PM"
        }
        else{
            val="AM"
        }
        timeElement.textContent = `${hours}:${minutes}:${seconds} ${val}`;
    }
    updateClock();
    setInterval(updateClock, 1000);
});
