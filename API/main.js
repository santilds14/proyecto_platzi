const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_T8bXoTvPkwOzpbMC1amTAgtlGkHhZURaBz3tHShzcLk7zB46fJ9b3DkXMe9ZNhuO';
const API_URL_FAVORITES = 'https://api.thecatapi.com/v1/favourites?limit=2&api_key=live_T8bXoTvPkwOzpbMC1amTAgtlGkHhZURaBz3tHShzcLk7zB46fJ9b3DkXMe9ZNhuO';

const spanError = document.getElementById('error');


async function loadRandomMichis() {
    const res = await fetch(API_URL_RANDOM);
    const data = await res.json();
    console.log('Random')
    console.log(data)

    if (res.status !== 200) {
        spanError.innerHTML = "Hubo un error" + res.status;
    } else {
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');

        img1.src = data[0].url;
        img2.src = data[1].url;
    }
}
async function loadFavouriteMichis() {
    const res = await fetch(API_URL_FAVORITES);
    const data = await res.json();
    console.log('Favoritos')
    console.log(data)

    if (res.status !== 200) {
        spanError.innerHTML = "Hubo un error" + res.status;
  } 
}

async function saveFavouriteMichis (){
    const res = await fetch(API_URL_FAVORITES, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "favorite": true
            })
        });
        const data = await res.json();
        console.log(data)
}
loadRandomMichis();
loadFavouriteMichis();