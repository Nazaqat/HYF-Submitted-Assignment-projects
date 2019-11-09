const ul = document.querySelector("ul");
const button = document.getElementById("buttni");

const Benjamin = "https://api.github.com/search/repositories?q=user:benna100"
const Amjad = "https://api.github.com/search/repositories?q=user:amjadiftikhar"
const Nazaqat = "https://api.github.com/search/repositories?q=user:Nazaqat"


function userName(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            //console.log(data.items[0].owner.login);
            const li = document.createElement("li");
            ul.appendChild(li);
            li.innerHTML = data.items[0].owner.login + "'s repository!";
            const li2 = document.createElement("li");
            ul.appendChild(li2);
            li2.innerHTML = " URL: " + " " + data.items[0].owner.url;
        })

    .catch(error => console.log(error));
}

button.addEventListener("click", function() {
    Promise.all([userName(Benjamin), userName(Amjad), userName(Nazaqat)]);

});
