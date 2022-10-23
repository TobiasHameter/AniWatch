const searchInput = document.querySelector("#search");
const combox = document.querySelector(".autocom-box");
searchInput.addEventListener("input", (e) => {
    const value = e.target.value
    console.log(value)
    fetch(`https://gogoanime.herokuapp.com/search?keyw=${value}`)
    .then((response) => response.json())
    .then((animelist) => showAnimes(animelist))
});

function showAnimes(list){
    console.log(list);
    const com1 = document.getElementById("com0");
    const com2 = document.getElementById("com1");
    const com3 = document.getElementById("com2");
    if(com1 != null){
        combox.removeChild(com1);
        com1.remove();
    }
    if(com2 != null)
    {
        combox.removeChild(com2);
        com2.remove();
    }
    if(com3 != null){
        combox.removeChild(com3);
        com3.remove();;
    }
    for(let i = 0; i < 3; i++){
        combox.insertAdjacentHTML(
            "beforeend",
            `<li id="com${i}"><a href="pages/anime.html?id=${list[i].animeId}"><div class="container"><div class="row"><div class="col col-sm-auto"><img src="${list[i].animeImg}"></div><div class="col col-lg-auto"><p>${list[i].animeTitle}</p></div></div></div></a></li>`
        )
    }
}