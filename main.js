let countDownDate = new Date("August 30, 2024 15:00:00").getTime();

let setInterval_custom_date = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countDown').innerHTML = 
    
    days + "d: " + hours + "h: "
    + minutes + "m: " + seconds + "s ";

    //write a text when countdown is finishied
    if(distance < 0) {
        document.getElementById('countDown').innerHTML = "EXPIRED";
    }
}, 1000);