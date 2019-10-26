async function setup() {

    const apiKey = '8Z83DoNxjr9BUrHOrEt2xr4ZYFxodA6Z'
    const search = document.querySelector('.input').value;
    const number = document.querySelector('.input2').value;
    const giphyAPI = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${apiKey}&limit=${number}`;

    const response = await fetch(giphyAPI);
    const json = await response.json();

    console.log(json.data[0].images.original.url);


    let gif = "";
    for (let i = 0; i < number; i++) {
        gif += '<center><img src = "' + json.data[i].images.original.url + '"  title="any thing"></center>';
    }
    document.querySelector(".results").innerHTML = gif;


};
document.querySelector('.button').addEventListener("click", setup);