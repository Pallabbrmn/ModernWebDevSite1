const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circleMover(){
    window.addEventListener('mousemove', function(details){
        document.querySelector('#circle').style.transform = `translate(${details.clientX}px, ${details.clientY}px)`;

    })
}

circleMover();

document.querySelectorAll('.elem').forEach(function(elem){

    var rotate= 0;
    var diffrotate = 0;

    elem.addEventListener('mouseleave', function(detail){
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: 0.5
        })
    })

    elem.addEventListener('mousemove', function(detail){
        var diff = detail.clientY - elem.getBoundingClientRect().top;
        //console.log(diff);

        diffrotate = detail.clientX - rotate;
        rotate = detail.clientX;

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: detail.clientX,
            rotate: gsap.utils.clamp(-29, 20, diffrotate * 0.5),
        })
    })
})