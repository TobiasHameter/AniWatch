window.addEventListener('load', () => {
    const list_el = document.querySelector("#latest-items");
    fetch("https://gogoanime.herokuapp.com/recent-release")
    .then((response) => response.json())
    .then((animelist) => printList(animelist));
    
    
    function printList(list){
        for(let i = 0; i < list.length; i++){
            const carousel_el = document.createElement("div");
            const card_el = document.createElement("div");
            const anime_img_el = document.createElement("img");
            const anime_name_el = document.createElement("p");
            carousel_el.classList.add("carousel-item");
            carousel_el.classList.add("active");
            card_el.classList.add("card");
            anime_img_el.src = list[i].animeImg;
            anime_name_el.textContent = list[i].animeTitle;
            carousel_el.appendChild(card_el);
            card_el.appendChild(anime_img_el);
            card_el.appendChild(anime_name_el);

            list_el.appendChild(carousel_el);
        }
        return items;
    }
});

searchInput.addEventListener(("input", (e) => {
    const value = e.target.value;
    console.log(value);
}))


