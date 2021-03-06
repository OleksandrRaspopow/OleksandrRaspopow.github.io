const spans = document.querySelectorAll("h1 span")
spans.forEach(span => span.addEventListener("mouseover", function(e){
    span.classList.add("animated", "rubberBand")
}))
spans.forEach(span => span.addEventListener("mouseout", function(e){
    span.classList.remove("animated", "rubberBand")
}))

const htmlBar = document.querySelector(".bar-html")
const cssBar = document.querySelector(".bar-css")
const jsBar = document.querySelector(".bar-js")
const phpBar = document.querySelector(".bar-php")
const pythonBar = document.querySelector(".bar-python")

var t1 = new TimelineLite()
t1 .fromTo(htmlBar, 0.75, {width: `calc(0% - 6px)`}, {width: `calc(70% - 6px)`, ease: Power4.easeOut})
    .fromTo(cssBar, 0.75, {width: `calc(0% - 6px)`}, {width: `calc(75% - 6px)`, ease: Power4.easeOut})
    .fromTo(jsBar, 0.75, {width: `calc(0% - 6px)`}, {width: `calc(50% - 6px)`, ease: Power4.easeOut})
    .fromTo(phpBar, 0.75, {width: `calc(0% - 6px)`}, {width: `calc(25% - 6px)`, ease: Power4.easeOut})
    .fromTo(pythonBar, 0.75, {width: `calc(0% - 6px)`}, {width: `calc(30% - 6px)`, ease: Power4.easeOut})

const contoller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: ".skills",
    triggerHook: 0
})
.setTween(t1)
.addTo(contoller)



