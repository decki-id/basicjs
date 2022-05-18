$('.search-button').click(function () {
    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=a21203d5&s=' + $('.input-keyword').val(),
        success: results => {
            const movies = results.Search;
            let cards = '';
            movies.forEach(m => {
                cards += showCards(m);
            });
            $('.movie-container').html(cards);

            $('.modal-detail-button').click(function () {
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=a21203d5&i=' + $(this).data('imdbid'),
                    success: m => {
                        const movieDetail = `<div class="container-fluid">
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
                        $('.modal-body').html(movieDetail);
                    },
                    error: (e) => {
                        console.log(e.responseText);
                    }
                });
            });
        },
        error: (e) => {
            console.log(e.responseText);
        }
    });
});

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