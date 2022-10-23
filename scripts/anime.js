var id = getParameter("id");
var epid = getParameter("ep");
const sliders = document.querySelector(".carouselbox");
const img_el = document.querySelector(".img");
const title_el = document.querySelector(".title");
const genres_el = document.querySelector(".genres");
const synops_el = document.querySelector(".synopsis");
const stream_el = document.querySelector(".stream");
const streams_el = document.querySelector(".streams");
var scrollPerClick;
var ImagePadding = 20;
var scrollAmount = 0;
var epnum = 0;

getAnimeDetails();
getStreamDetails();


// Display Content

function showInfo(animeInfo){
    const anime_img_el = document.createElement("img");
    img_el.insertAdjacentHTML(
        "beforeend",
        `<img src="${animeInfo.animeImg}"/>`
    )
    title_el.insertAdjacentHTML(
        "beforeend",
        `<h1>${animeInfo.animeTitle}</h1><hr style="border-color: d4d4d4;">`
    )
    let genres = "";
    for(let i = 0; i < animeInfo.genres.length;i++){
        if(i != animeInfo.genres.length-1){
            genres+= `${animeInfo.genres[i]} ,`;
        }else{
            genres += `${animeInfo.genres[i]}`;
        }
    }
    genres_el.insertAdjacentHTML(
        "beforeend",
        `<p>Genre:      ${genres}</p>`
    )
    synops_el.insertAdjacentHTML(
        "beforeend",
        `<p>${animeInfo.synopsis}</p>`
    )

    animeInfo.episodesList.map(function(cur, index){
        if(cur.episodeId == epid){
        sliders.insertAdjacentHTML(
            "beforeend",
            `<button onclick="location.href='anime.html?id=${id}&ep=${cur.episodeId}'" class="epitem active">Episode ${cur.episodeNum}</button>`
            
        )
        }else{
            sliders.insertAdjacentHTML(
                "beforeend",
                `<button onclick="location.href='anime.html?id=${id}&ep=${cur.episodeId}'" class="epitem">Episode ${cur.episodeNum}</button>`
            ) 
        }
    })
    scrollPerClick = 200;

}
function showStream(streamInfo){
    stream_el.insertAdjacentHTML(
        "beforeend",
        `<iframe class="videoFrame" src="${streamInfo.Referer}" width="1080", height="720" allowFullscreen></iframe>`
    )
   }


// GET Parameters from URL

function getParameter(parameterName){
    let parameters = new URLSearchParams(window.location.search);
    return parameters.get(parameterName);

}


// API

function getAnimeDetails(){
    fetch(`https://gogoanime.herokuapp.com/anime-details/${id}`)
    .then((response) => response.json())
    .then((animelist) => showInfo(animelist));
}
function getStreamDetails(){
    if(epid != null){
        fetch(`https://gogoanime.herokuapp.com/vidcdn/watch/${epid}`)
        .then((response) => response.json())
        .then((animelist) => showStream(animelist));
    }
}