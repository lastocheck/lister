import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getUserWidgetList } from '../../services/DataService';
import { useAppSelector } from '../../store/hooks';

const WidgetNavbar = () => {
    //TODO: create user object in global store and request it here
    const user = useAppSelector((state) => state.user);
    if (user && user.widgets.length > 0) {
        const widgets = user.widgets;
        return (
            <Nav variant="pills" className="justify-content-center">
                {widgets.map((widget) => {
                    return (
                        <NavItem>
                            <Nav.Link
                                as={Link}
                                href={widget.name.toLowerCase().replaceAll(' ', '_')}
                                to={widget.name.toLowerCase().replaceAll(' ', '_')}
                            >
                                <i className={widget.icon} />
                                {widget.name}
                            </Nav.Link>
                        </NavItem>
                    );
                })}
            </Nav>
        );
    } else {
        return null;
    }
};

export default WidgetNavbar;
