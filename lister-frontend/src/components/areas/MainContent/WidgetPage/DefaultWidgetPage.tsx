import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { WidgetItem, WidgetItemDefault } from '../../../../types/Widget';
import WidgetItemCard from './WidgetItemCard';

interface DefaultWidgetPageProps {
    categoryName: string;
    title: string;
    items: Array<WidgetItemDefault>;
}

const DefaultWidgetPage = (props: DefaultWidgetPageProps) => {
    return (
        <Container>
            <Row>
                <h1>{props.title}</h1>
            </Row>
            <Row>
                {props.items.map((item) => {
                    return <WidgetItemCard item={item} />;
                })}
            </Row>
        </Container>
    );
};

export default DefaultWidgetPage;
