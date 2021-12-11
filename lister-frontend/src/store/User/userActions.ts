import { User } from '../../types/User';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export type UserAction = {
    type: typeof SET_CURRENT_USER;
    payload: User;
};

export const setCurrentUser = (user: User) => {
    return { type: SET_CURRENT_USER, payload: user };
};
