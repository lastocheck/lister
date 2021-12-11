export interface WidgetItem {
    id: string;
    type: string;
    finished: boolean;
    createdOn: Date;
    showPublic: boolean;
}

export interface WidgetItemMedia extends WidgetItem {
    serviceId: string;
    rating: number;
    note?: string;
    review?: string;
}

// export interface WidgetType {
//     id: string;
//     name: string;
//     categories: {
//         finished: string;
//         notFinished: string;
//     };
// }

// export interface WidgetCategory {
//   id: string;
//   name: string;
// }

export interface Widget {
    id: string;
    type: string;
    name: string;
    categories: Array<string>;
    isPublic: boolean;
    itemIds: Array<string>;
    icon: string;
}
