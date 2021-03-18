//Slider is overall container
let slider = document.getElementById('slider');
//Items is the flex
let sliderItems = document.getElementById('items');
//Individual card
let slide = document.querySelector('.slide');
let allItems = Array.from(document.getElementsByClassName('slide')).length
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let count = 0
let slideSize = slide.clientWidth + 62.5 //40 is the gap
let windowWidth = window.innerWidth;

next.addEventListener('click', () => {
    console.log('click')
    if (count < 3 && windowWidth > 1150) {
        count += 1
        sliderItems.style.left = - count * slideSize +'px';
    } else if (count < 4 && windowWidth < 1150 && windowWidth > 770) {
        count += 1
        sliderItems.style.left = - count * (slideSize - 10) +'px';
    } else if (count < 5 && windowWidth < 770) {
        count += 1
        sliderItems.style.left = - count * (slideSize - 10) +'px';
    }
})

prev.addEventListener('click', () => {
    console.log('here')
    if (count > 0) {
    count -= 1
    sliderItems.style.left = - count * slideSize +'px';
    }
})

window.addEventListener('resize', () => {
    windowWidth = window.innerWidth;
})