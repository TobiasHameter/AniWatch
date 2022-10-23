const slidersRecent = document.querySelector(".recent");
const slidersPopular = document.querySelector(".popular");
var scrollPerClickRecent;
var ImagePadding = 20;
var scrollPerClickPopular;
getRecentAnimes();
getPopularAnimes();

var scrollAmountRecent = 0;
var scrollAmountPopular = 0;

function sliderRecentScrollLeft(){
    slidersRecent.scrollTo({
        top:0,
        left: (scrollAmountRecent -= scrollPerClickRecent),
        behavior: "smooth"
    });
    if(scrollAmountRecent < 0){
        scrollAmountRecent = 0;
    }
}

function sliderRecentScrollRight(){
    if(scrollAmountRecent <= slidersRecent.scrollWidth - slidersRecent.clientWidth){
        slidersRecent.scrollTo({
            top: 0,
            left: (scrollAmountRecent+=scrollPerClickRecent),
            behavior: "smooth"
        });
    }
}

function sliderPopularScrollLeft(){
    slidersPopular.scrollTo({
        top:0,
        left: (scrollAmountPopular -= scrollPerClickPopular),
        behavior: "smooth"
    });
    if(scrollAmountPopular < 0){
        scrollAmountPopular = 0;
    }
}

function sliderPopularScrollRight(){
    if(scrollAmountPopular <= slidersPopular.scrollWidth - slidersPopular.clientWidth){
        slidersPopular.scrollTo({
            top: 0,
            left: (scrollAmountPopular+=scrollPerClickPopular),
            behavior: "smooth"
        });
    }
}





function getRecentAnimes(){
    fetch("https://gogoanime.herokuapp.com/recent-release")
    .then((response) => response.json())
    .then((animelist) => showRecentAnimes(animelist));
}
function showRecentAnimes(recentList){
    recentList.map(function(cur,index){
        console.log(cur.animeId);
        slidersRecent.insertAdjacentHTML(
            "beforeend",
            `<a href="pages/anime.html?id=${cur.animeId}" class="animeitem"><img class="img1-${index} slider-img" src="${cur.animeImg}" /><p>${cur.animeTitle}</p></a>`
        )
    })

    scrollPerClickRecent = document.querySelector(".img1-1").clientWidth + ImagePadding;
}


function getPopularAnimes(){
    fetch("https://gogoanime.herokuapp.com/popular")
    .then((response) => response.json())
    .then((animelist) => showPopularAnimes(animelist));
}

function showPopularAnimes(popularList){
    popularList.map(function(cur, index){
        slidersPopular.insertAdjacentHTML(
            "beforeend",
            `<a href="pages/anime.html?id=${cur.animeId}" class="animeitem"><img class="img2-${index} slider-img" src="${cur.animeImg}" /><p>${cur.animeTitle}</p></a>`
        )
    })
    scrollPerClickPopular = document.querySelector(".img2-1").clientWidth + ImagePadding;
}
