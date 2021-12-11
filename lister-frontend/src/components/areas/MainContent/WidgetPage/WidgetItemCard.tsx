import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import { WidgetItemDefault } from '../../../../types/Widget';
import ItemInfoDefault from './ItemInfoDefault';

interface WidgetItemCardProps {
    item: WidgetItemDefault;
}

const WidgetItemCard = ({ item }: WidgetItemCardProps) => {
    return (
        <Card>
            <Card.Header>{item.info.name}</Card.Header>
            <Card.Body>
                <Row>
                    <Col>
                        <Image src={item.info.img} thumbnail />
                    </Col>
                    <Col>
                        <ItemInfoDefault item={item.info} />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default WidgetItemCard;
