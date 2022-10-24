const slidersRecent = document.querySelector(".slide");
const slidersPopular = document.getElementById("2");
var scrollPerClickRecent;
var ImagePadding = 20;
var scrollPerClickPopular;
var scrollAmountRecent = 0;
var scrollAmountPopular = 0;

getRecentAnimes();
getPopularAnimes();


// Display Content

function showPopularAnimes(popularList){
    popularList.map(function(cur, index){
        slidersPopular.insertAdjacentHTML(
            "beforeend",
            `<a href="pages/anime.html?id=${cur.animeId}" class="item"><div><img class="img2-${index} slider-img" src="${cur.animeImg}" /><p>${cur.animeTitle}</p></div></a>`
        )
    })
    scrollPerClickPopular = document.querySelector(".img2-1").clientWidth + ImagePadding;
}
function showRecentAnimes(recentList){
    recentList.map(function(cur,index){
        console.log(cur.animeId);
        slidersRecent.insertAdjacentHTML(
            "beforeend",
            `<a class="item" href="pages/anime.html?id=${cur.animeId}"><div><img class="img1-${index} slider-img" src="${cur.animeImg}" /><p>${cur.animeTitle}</p></div></a>`
        )
    })

    scrollPerClickRecent = document.querySelector(".img1-1").clientWidth + ImagePadding;
}


// API
function getRecentAnimes(){
    fetch("https://gogoanime.herokuapp.com/recent-release")
    .then((response) => response.json())
    .then((animelist) => showRecentAnimes(animelist));
}
function getPopularAnimes(){
    fetch("https://gogoanime.herokuapp.com/popular")
    .then((response) => response.json())
    .then((animelist) => showPopularAnimes(animelist));
}

