import { PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/User';
import { Widget } from '../../types/Widget';
import { SET_CURRENT_USER } from './userActions';

const initialState = {
    id: '0',
    widgets: new Array<Widget>()
};

const userReducer = (state: User = initialState, action: PayloadAction<any>) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...action.payload
            };
        default:
            return state;
    }
};

export default userReducer;
