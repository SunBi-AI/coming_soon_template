let countDownDate = new Date("August 30, 2024 15:00:00").getTime();


let setInterval_custom_date = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if(document.getElementById('countDown')) {

      document.getElementById('countDown').innerHTML = 
      
      days + "d: " + hours + "h: "
      + minutes + "m: " + seconds + "s ";
  
      //write a text when countdown is finishied
      if(distance < 0) {
          document.getElementById('countDown').innerHTML = "EXPIRED";
      }
    }


    if(document.getElementById('countDown__2')) {

      document.getElementById('countDown__2').innerHTML = 
          `
          <div class="flex flex-col items-center justify-center">
            <p class="">${days}</p>
            <p class="type__text">days</p>
          </div>
          <div class="flex flex-col  items-center justify-center">
            <p class="">${hours}</p>
            <p class="type__text">hours</p>
          </div>
          <div class="flex flex-col  items-center justify-center">
            <p class="">${minutes}</p>
            <p class="type__text">minutes</p>
          </div>
          <div class="flex flex-col  items-center justify-center">
            <p class="">${seconds}</p>
            <p class="type__text">seconds</p>
          </div>
          `
  
      //write a text when countdown is finishied
      if(distance < 0) {
          document.getElementById('countDown__2').innerHTML = "EXPIRED";
      }
    }
}, 1000);



// http://ahrengot.com/tutorials/greensock-javascript-animation

var $cursor = $('.cursor');

function moveCursor(e) {
  $cursor.addClass('is-moving');
  
  TweenLite.to($cursor, 0.23, {
    left: e.pageX,
    top: e.pageY,
    ease: Power4.easOut
  });
  
  clearTimeout(timer);

   var timer = setTimeout(function() {
       $cursor.removeClass('is-moving');
   }, 300);
}

$(window).on('mousemove', moveCursor);


/*************************
 *  video playback
 * ****************************
 */
var video = document.getElementById('video__m');

    // Set the playback rate to slow down the video
video.playbackRate = 0.5; 
