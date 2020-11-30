const movieResponse = {
    "total_results": 10000,
    "page": 1,
    "total_pages": 500,
    "results": [{
        "video": false,
        "vote_average": 5.6,
        "popularity": 1487.674,
        "vote_count": 29,
        "release_date": "2020-11-13",
        "adult": false,
        "backdrop_path": "/fTDzKoQIh1HeyjfpG5AHMi2jxAJ.jpg",
        "overview": "When Anna Wyncomb is introduced to an an underground, all-female fight club in order to turn the mess of her life around, she discovers she is much more personally connected to the history of the club than she could ever imagine.",
        "genre_ids": [
            28,
            35
        ],
        "id": 682377,
        "original_language": "en",
        "original_title": "Chick Fight",
        "poster_path": "/4ZocdxnOO6q2UbdKye2wgofLFhB.jpg",
        "title": "Chick Fight"
    }, ]
}

const movieStars = {
    "results": [{
        "known_for": [{
            "adult": false,
            "backdrop_path": "/mRfI3y2oAd7ejur2di09xC9niqp.jpg",
            "media_type": "movie",
            "genre_ids": [
                28,
                53,
                80
            ],
            "title": "Fast & Furious 6",
            "original_language": "en",
            "original_title": "Fast & Furious 6",
            "poster_path": "/n31VRDodbaZxkrZmmzyYSFNVpW5.jpg",
            "vote_count": 8241,
            "video": false,
            "vote_average": 6.8,
            "id": 82992,
            "overview": "Hobbs has Dominic and Brian reassemble their crew to take down a team of mercenaries: Dominic unexpectedly gets convoluted also facing his presumed deceased girlfriend, Letty.",
            "release_date": "2013-05-21"
        }, ]
    }]
}

const starDetail = {name: 'Taylor', id: 11111}


export const getMovies = () => new Promise((resolve, reject) => {
    resolve(movieResponse)
})


export const getMovie = id => new Promise((resolve, reject) => {
    if (!id) {
        reject({
            msg: 'no id'
        })
    } else {
        resolve(movieResponse.results[0])
    }
})

export const getMovieStars = () => new Promise((resolve, reject) => {
    resolve(movieStars.results)
}) 

export const getStarDetail = (id) => new Promise((resolve, reject) => {
    if(!id) {
        reject({msg: 'err'})
    }else {
        resolve(starDetail)
    }
})