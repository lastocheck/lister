export interface WidgetItem {
    id: string;
    type: string;
    createdOn: Date;
    showPublic: boolean;
}

export interface WidgetItemDefault extends WidgetItem {
    serviceId: string;
    info: DefaultItemInfo;
    rating: number;
    note?: string;
    review?: string;
}

export interface ItemInfoRating {
    service: string;
    rating: number;
}

export interface ItemInfoLink {
    service: string;
    link: string;
}

export interface DefaultItemInfo {
    type: 'movie' | 'tvshow' | 'book' | 'music';
    name: string;
    img: string;
    year: string;
    genre: string;
    author: string;
    ratings: Array<ItemInfoRating>;
    links: Array<ItemInfoLink>;
    annotation: string;
    cast?: string;
}

// export interface WidgetType {
//     id: string;
//     name: string;
//     categories: {
//         finished: string;
//         notFinished: string;
//     };
// }

export interface WidgetCategory {
    name: string;
    widgets: Array<string>;
}

export interface Widget {
    id: string;
    type: string;
    name: string;
    categories: Array<WidgetCategory>;
    isPublic: boolean;
    items: Array<WidgetItem>;
    icon: string;
}
