//Photo changing
const elements = document.querySelector('.imgHolder').getElementsByTagName('img');
const array = Array.from(elements)
let number = 0;
let timer = false;
window.addEventListener('mousemove', (e) => {
    //Make this so code is only firing if scrolled far enough up top? Could decrease processing? If statement put above event listener
    if (e.clientX % 13 === 1 | e.clientY % 10 === 1) {
        if (number === 5) {
            number = 1;
        } else {
            number++
        }
        changeImage(number)
    }
})
const changeImage = (number) => {
    const img = array[number]
    array.map(x => {
        x.style.display = "none";
        x.style.zIndex = 0;
    })
    img.style.display = "block";
    img.style.zIndex = 100;
}

//Scrolling on click
//Need to make so cannot click circle text twice (or scrolls to top when reclick)
//Need loading page to cover whilst things like gsap, window object are loading?
const circleText = document.querySelector('.circleText');
gsap.registerPlugin(ScrollToPlugin);

window.addEventListener('load', () => {
    if (window.scrollY < 864) {
        // const body = document.getElementsByTagName('body');
        // const bodyA = Array.from(body)
        document.body.style.overflowY = "hidden"
        gsap.to(window, {scrollTo: {y: 0}})
    } 
})

let clicked = false;
circleText.addEventListener('click', () => {
    if (window.scrollY < 865 && clicked === false) {
        //Callback animation
        var tl2 = gsap.timeline({paused: true})
        tl2.fromTo('.retroMain', {opacity: 0}, {opacity: 1, duration: 0.2})
        tl2.fromTo('.twoSec1', {display: "none"}, {display: "block", duration: 0.15})
        tl2.fromTo('.threeSec1', {display: "none"}, {display: "block", duration: 0.15})
        tl2.fromTo('.fourSec1', {display: "none"}, {display: "block", duration: 0.15})
        //The intermittent animation
        var tlSplash = gsap.timeline({paused: true, onComplete: () => {
            setTimeout(() => {tl2.restart()}, 100)
            clicked = true;
        }})
        tlSplash.to('body', {overflowY: 'hidden', duration: 0.001})
        tlSplash.to(window, {scrollTo: 0, duration: 0.1})
        
        tlSplash.fromTo('.gsapEl', {scaleY: 0}, {scaleY: 1, display: "block", duration: 0.7})
        tlSplash.to('.gsapEl', {marginTop: 260 + "vh", duration: 0.001})
        tlSplash.to(window, {scrollTo: {y: '.grid2', autoKill: false}, duration: 0.001 }, '-=0.001')
        tlSplash.to('.gsapEl', {scaleY: 0, duration: 0.7})
        tlSplash.to('body', {overflowY: 'scroll'})
        tlSplash.restart()
    }
})


//Section three/3
var tl3 = gsap.timeline({paused: true, onComplete: () => {
    tl32.restart()
}})
tl3.fromTo('.textContain h1', {opacity: 0}, {opacity: 1, duration: 0.1})
tl3.fromTo('.textContain h2', {opacity: 0}, {opacity: 0.9, duration: 0.1})
tl3.fromTo('.textContain h3', {opacity: 0}, {opacity: 0.8, duration: 0.1})
tl3.fromTo('.textContain h4', {opacity: 0}, {opacity: 0.7, duration: 0.1})
tl3.fromTo('.textContain h5', {opacity: 0}, {opacity: 0.6, duration: 0.1})
tl3.fromTo('.textContain h6', {opacity: 0}, {opacity: 0.5, duration: 0.1})

gsap.timeline({
    scrollTrigger: {
        trigger: '.grid3',
        start: 'top 20%',
        onEnter: () => tl3.play(),
        onLeaveBack: () => {
            tl3.reverse()
            tl32.pause()
        },
        markers: {startColor: "green"}
    }
})

var tl32 = gsap.timeline({paused: true, repeat: 100})
tl32.fromTo('.textContain h1', {x: 0}, {x: -900, ease: "none", duration: 7})
tl32.fromTo('.textContain h2', {x: 0}, {x: -900, ease: "none", duration: 7}, '-=7')
tl32.fromTo('.textContain h3', {x: 0}, {x: -900, ease: "none", duration: 7}, '-=7')
tl32.fromTo('.textContain h4', {x: 0}, {x: -900, ease: "none", duration: 7}, '-=7')
tl32.fromTo('.textContain h5', {x: 0}, {x: -900, ease: "none", duration: 7}, '-=7')
tl32.fromTo('.textContain h6', {x: 0}, {x: -900, ease: "none", duration: 7}, '-=7')



//Section four/4
var tl4 = gsap.timeline({paused: true})
tl4.fromTo('.retroMain4', {opacity: 0}, {opacity: 1, duration: 0.2})
tl4.fromTo('.twoSec14', {display: "none"}, {display: "block", duration: 0.15})
tl4.fromTo('.threeSec14', {display: "none"}, {display: "block", duration: 0.15})
tl4.fromTo('.fourSec14', {display: "none"}, {display: "block", duration: 0.15})
gsap.timeline({
    scrollTrigger: {
        trigger: '.grid4',
        start: 'top 20%',
        onEnter: () => tl4.play(),
        onLeaveBack: () => tl4.reverse(),
        markers: {startColor: "green"}
    }
})