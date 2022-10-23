var keyw = getParameter('keyw');
const text_el = document.querySelector('.text');
const results_el = document.querySelector('.results');

fetch(`https://gogoanime.herokuapp.com/search?keyw=${keyw}&page=3`)
.then((response) => response.json())
.then((animelist) => showResults(animelist));

function showResults(list){
    console.log(list);
    list.map(function(cur, index){
        results_el.insertAdjacentHTML(
            "beforeend",
            `<a href="anime.html?id=${cur.animeId}"><div class="animeitem"><img src="${cur.animeImg}"><p>${cur.animeTitle}</p></div></a>`
            )
    })
}



function getParameter(parameterName){
    let parameters = new URLSearchParams(window.location.search);
    return parameters.get(parameterName);

}
