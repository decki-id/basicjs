// API request using JQuery Ajax
// $('.search-button').click(function () {
//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=a21203d5&s=' + $('.input-keyword').val(),
//         success: results => {
//             const movies = results.Search;
//             let cards = '';
//             movies.forEach(m => {
//                 cards += showCards(m);
//             });
//             $('.movie-container').html(cards);

//             // Show Details Button
//             $('.modal-detail-button').click(function () {
//                 $.ajax({
//                     url: 'http://www.omdbapi.com/?apikey=a21203d5&i=' + $(this).data('imdbid'),
//                     success: m => {
//                         const movieDetail = showMovieDetail(m);
//                         $('.modal-body').html(movieDetail);
//                     },
//                     error: (e) => {
//                         console.log(e.responseText);
//                     }
//                 });
//             });
//         },
//         error: (e) => {
//             console.log(e.responseText);
//         }
//     });
// });

// API request using Vanilla JavaScript Fetch (Promise)
// const searchButton = document.querySelector('.search-button');
// searchButton.addEventListener('click', function () {
//     fetch('http://www.omdbapi.com/?apikey=a21203d5&s=' + document.querySelector('.input-keyword').value).then(response => response.json()).then(response => {
//         const movies = response.Search;
//         let cards = '';
//         movies.forEach(m => cards += showCards(m));
//         document.querySelector('.movie-container').innerHTML = cards;

//         // Show Details Button
//         document.querySelectorAll('.modal-detail-button').forEach(button => {
//             button.addEventListener('click', function () {
//                 const imdbid = this.dataset.imdbid;
//                 fetch('http://www.omdbapi.com/?apikey=a21203d5&i=' + imdbid).then(response => response.json()).then(m => {
//                     const movieDetail = showMovieDetail(m);
//                     document.querySelector('.modal-body').innerHTML = movieDetail;
//                 });
//             });
//         });
//     });
// });

// Fetch Refactor (Async Await)
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function () {
    try {
        const
            inputKeyword = document.querySelector('.input-keyword'),
            movies = await getMovies(inputKeyword.value);
        updateUI(movies);
    } catch (error) {
        alert(error);
    }
});
document.addEventListener('click', async function (e) { // event binding
    if (e.target.classList.contains('modal-detail-button')) {
        const
            imdbid = e.target.dataset.imdbid,
            movieDetail = await getMovieDetail(imdbid);
        updateUIDetail(movieDetail);
    }
});
function getMovies(keyword) {
    return fetch('http://www.omdbapi.com/?apikey=a21203d5&s=' + keyword).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    }).then(response => {
        if (response.Response === "False") {
            throw new Error(response.Error);
        }
        return response.Search;
    });
}
function updateUI(movies) {
    let cards = '';
    movies.forEach(m => cards += showCards(m));
    document.querySelector('.movie-container').innerHTML = cards;
}
function getMovieDetail(imdbid) {
    return fetch('http://www.omdbapi.com/?apikey=a21203d5&i=' + imdbid).then(response => response.json()).then(m => m);
}
function updateUIDetail(m) {
    const movieDetail = showMovieDetail(m);
    document.querySelector('.modal-body').innerHTML = movieDetail;
}

function showCards(m) {
    return `<div class="col-md-4 my-3 d-flex">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <p class="card-text">${m.Year}</p>
                        <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>`;
}

function showMovieDetail(m) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md mb-3">
                        <img src="${m.Poster}" alt="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${m.Title} (${m.Year})</li>
                            <li class="list-group-item"><strong>Director:</strong> ${m.Director}</li>
                            <li class="list-group-item"><strong>Actors:</strong> ${m.Actors}</li>
                            <li class="list-group-item"><strong>Writers:</strong> ${m.Writer}</li>
                            <li class="list-group-item"><strong>Plot:</strong> ${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
}