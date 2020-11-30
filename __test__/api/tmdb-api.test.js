import {
    getMovies, getMovie, getMovieStars, getStarDetail
} from '../../src/api/__mocks__/tmdb-api'

describe('Tmdb api tests', () => {
    it('should return popular movies', () => {
        return getMovies().then((res) => expect(res.total_pages).toEqual(500))
    })
    it('should return movie detail by valid id', () => {
        expect.assertions(1)
        return getMovie(1213).then(res => expect(res.vote_average).toEqual(5.6))
    })
    it('should catch an exception by invalid id', () => {
        expect.assertions(1)
        return getMovie().catch(err => expect(err.msg).toEqual('no id'))
    })
    it('should return star lists', () => {
        return getMovieStars().then((res) => {
            const star = res[0].known_for[0]
            expect(star.id).toEqual(82992)
        })
    })
    it('should return star detail with valid id', () => {
        expect.assertions(1)
        return getStarDetail(11111).then((res) => expect(res.name).toEqual('Taylor'))
    })
    it('should catch an exception without id', () => {
        expect.assertions(1)
        return getStarDetail().catch((err) => expect(err.msg).toEqual('err'))
    })
})