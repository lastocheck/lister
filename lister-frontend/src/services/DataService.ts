import { User } from '../types/User';
import { Widget, WidgetItemDefault } from '../types/Widget';
const axios = require('axios').default;

export const getUserWidgetList = async (user: User): Promise<any> => {
    const movie = await test_getMovieItem();
    const widgets = new Array<Widget>();

    widgets.push(
        {
            id: '1',
            type: 'default',
            name: 'Movies',
            categories: [
                { name: 'Watched', widgets: [] },
                { name: 'Not Watched', widgets: [] }
            ],
            isPublic: true,
            items: [movie],
            icon: 'fas fa-film'
        },
        {
            id: '2',
            type: 'default',
            name: 'Books',
            categories: [
                { name: 'Read', widgets: [] },
                { name: 'Not Read', widgets: [] }
            ],
            isPublic: true,
            items: [],
            icon: 'fas fa-book'
        },
        {
            id: '3',
            type: 'default',
            name: 'TV Shows',
            categories: [
                { name: 'Watched', widgets: [] },
                { name: 'Not Watched', widgets: [] }
            ],
            isPublic: true,
            items: [],
            icon: 'fas fa-tv'
        },
        {
            id: '4',
            type: 'default',
            name: 'Music',
            categories: [
                { name: 'Listened', widgets: [] },
                { name: 'Not Listened', widgets: [] }
            ],
            isPublic: true,
            items: [],
            icon: 'fas fa-music'
        }
    );

    return widgets;
};

export const test_getMovieItem = async (): Promise<any> => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=Fight+Club`
        );
        if (response.status === 200) {
            const movieData = response.data.results[0];

            const serviceId = movieData.id;
            const name = movieData.title;
            const img = `https://image.tmdb.org/t/p/w500${movieData.poster_path}`;
            const year =
                typeof movieData.release_date === 'string'
                    ? movieData.release_date.substr(0, 3)
                    : movieData.release_date;

            const { data } = await axios.get(
                `https://api.themoviedb.org/3/movie/${serviceId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&append_to_response=credits&language=en-US`
            );
            const genres = data.genres.filter((genre: { id: number; name: string }) =>
                movieData.genre_ids.includes(genre.id)
            );
            let genre = '';
            genres.map((genreItem: { id: number; name: string }) => (genre = genre.concat(genreItem.name, ', ')));
            genre = genre.slice(0, -2);

            const author = data.credits.crew.find(
                (crewItem: { job: string }, index: number) => crewItem.job === 'Director'
            ).name;

            const links = [{ service: 'imdb', link: `https://www.imdb.com/title/tt${data.imdb_id}` }];

            const annotation = data.overview;

            return {
                id: '0',
                type: 'movie',
                createdOn: new Date(Date.now()),
                showPublic: true,
                serviceId: serviceId,
                rating: 4,
                info: {
                    type: 'movie',
                    name: name,
                    img: img,
                    year: year,
                    genre: genre,
                    author: author,
                    links: links,
                    ratings: [{ service: 'rt', rating: 88 }],
                    annotation: annotation
                }
            };
        } else {
            console.log(response.status, response.statusText);
            throw Error(`${response.status} ${response.statusText}`);
        }
    } catch (error) {
        console.error(error);
        return error;
    }
};
