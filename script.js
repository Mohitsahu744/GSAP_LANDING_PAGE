var tl = gsap.timeline()

tl.from("#nav img, #nav h3, #nav h4, #nav button",{
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.2

})
tl.from("#main h1",{
    y:120,
    opacity:0,
    stagger:0.3

})
tl.from("#main h1 span",{
    y:-600,
    opacity:0,
  
})
tl.from("#main #left-image,#main #right-image",{
    scale:0,
    stagger:0.3,
    opacity:0
})
tl.from("h5",{
    scale:0,
    opacity:0,
})