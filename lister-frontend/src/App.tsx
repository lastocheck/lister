import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DefaultWidgetPage from './components/areas/MainContent/WidgetPage/DefaultWidgetPage';
import WidgetNavbar from './components/WidgetNavbar/WidgetNavbar';
import { getUserWidgetList } from './services/DataService';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { SET_CURRENT_USER } from './store/User/userActions';
import { WidgetItemDefault } from './types/Widget';

function App() {
    const user = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    if (user) {
        if (user.widgets.length === 0) {
            getUserWidgetList(user).then((result) => {
                dispatch({ payload: { ...user, widgets: result }, type: SET_CURRENT_USER });
            });
        }
    }

    return (
        <Routes>
            <Route path="/" element={<WidgetNavbar />} />
            <Route
                path="movies"
                element={
                    <DefaultWidgetPage
                        categoryName="test"
                        title="Movies"
                        items={user.widgets[0].items as Array<WidgetItemDefault>}
                    />
                }
            />
        </Routes>
    );
}

export default App;
