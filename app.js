var box = document.querySelector('.container');
var box1 = document.querySelector('.another');
var video = document.getElementById('video');
var text = document.querySelector('.video-text');
var text1 = document.getElementById('text1');
var text2 = document.getElementById('text2');

const controller = new ScrollMagic.Controller();


const scene = new ScrollMagic.Scene({
    duration : 9000,
    triggerElement : box,
    triggerHook : 0
})
.setPin(box)
.addTo(controller);

 const textAnim = TweenMax.fromTo(text,3, {opacity : 1}, { opacity :0});

 const scene2 = new ScrollMagic.Scene({
    duration : 3000,
    triggerElement : box,
    triggerHook : 0
})
.setTween(textAnim)
.addTo(controller);


// const textAnim2 = TweenMax.fromTo(text1,9, {opacity : 1}, { opacity :0,});
//                             // .fromTo(text2, {opacity : 1}, { opacity :0});

const scene3 = new ScrollMagic.Scene({
    duration : 2000,
    triggerElement : box1,
    triggerHook : 0
})
.setPin(box1)
// .setTween(textAnim2)
.addTo(controller);

const tl = gsap.timeline();

const textAnim3 = tl.fromTo(text1, {opacity : 1}, { opacity :0})
                           .fromTo(text2, {opacity : 0}, { opacity :1});

const scene4 = new ScrollMagic.Scene({
    duration : 1000,
    triggerElement : box1,
    triggerHook : 0
})
.setTween(textAnim3)
.addTo(controller);



var scroll =0;
var delay=0;

scene.on("update" , (e) => {
     scroll =(e.scrollPos)/1000;
   console.log(scroll);

});


setInterval(() => {
     delay+= (scroll - delay) * .1;
      video.currentTime = delay;

}, 33.3);