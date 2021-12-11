import { User } from '../types/User';
import { Widget } from '../types/Widget';

export const getUserWidgetList = (user: User): Array<Widget> => {
    const widgets = new Array<Widget>();

    widgets.push(
        {
            id: '1',
            type: 'default-movies',
            name: 'Movies',
            categories: ['Watched', 'Not Watched'],
            isPublic: true,
            itemIds: [],
            icon: 'fas fa-film'
        },
        {
            id: '2',
            type: 'default-books',
            name: 'Books',
            categories: ['Read', 'Not Read'],
            isPublic: true,
            itemIds: [],
            icon: 'fas fa-book'
        },
        {
            id: '3',
            type: 'default-tvshows',
            name: 'TV Shows',
            categories: ['Watched', 'Not Watched'],
            isPublic: true,
            itemIds: [],
            icon: 'fas fa-tv'
        },
        {
            id: '4',
            type: 'default-music',
            name: 'Music',
            categories: ['Listened', 'Not Listened'],
            isPublic: true,
            itemIds: [],
            icon: 'fas fa-music'
        }
    );

    return widgets;
};
