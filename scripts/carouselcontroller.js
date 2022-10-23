const scrollAmounts = new Map();
function sliderScrollLeft(id, scrollPerClick){
    const sliders = document.getElementById(id);
    if(!scrollAmounts.has(id)){
        scrollAmounts.set(id, 0);
    }
    sliders.scrollTo({
        top:0,
        left: (scrollAmounts.get(id) - scrollPerClick),
        behavior: "smooth"
    });
    scrollAmounts.set(id, scrollAmounts.get(id) -scrollPerClick);
    if(scrollAmounts.get(id) < 0){
        scrollAmounts.get(id) = 0;
    }
}
function sliderScrollRight(id, scrollPerClick){
    const sliders = document.getElementById(id);
    console.log(sliders);
    if(!scrollAmounts.has(id)){
        scrollAmounts.set(id, 0);
    }
    if(scrollAmounts.get(id)<= sliders.scrollWidth - sliders.clientWidth){
        sliders.scrollTo({
            top: 0,
            left: (scrollAmounts.get(id)+scrollPerClick),
            behavior: "smooth"
        });
        scrollAmounts.set(id,scrollAmounts.get(id)+scrollPerClick);
        console.log(scrollAmounts.get(id));
        console.log(id);
    }
}