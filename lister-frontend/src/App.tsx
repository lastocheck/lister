import React from 'react';
import './App.css';
import WidgetNavbar from './components/WidgetNavbar/WidgetNavbar';
import { getUserWidgetList } from './services/DataService';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { SET_CURRENT_USER } from './store/User/userActions';

function App() {
    const user = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    if (user) {
        if (user.widgets.length === 0) {
            dispatch({ payload: { ...user, widgets: getUserWidgetList(user) }, type: SET_CURRENT_USER });
        }
    }

    return (
        <div className="App">
            <WidgetNavbar />
        </div>
    );
}

export default App;
