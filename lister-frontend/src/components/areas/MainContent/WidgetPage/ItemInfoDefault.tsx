import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DefaultItemInfo } from '../../../../types/Widget';

const ItemInfoDefault = ({ item }: { item: DefaultItemInfo }) => {
    return (
        <Container>
            <Row>Year: {item.year}</Row>
            <Row>Genre: {item.genre}</Row>
            <Row>
                {item.type === 'movie' || 'tvshow' ? 'Director: ' : 'Author: '}
                {item.author}
            </Row>
            {'cast' in item ? <Row>Cast: {item.cast}</Row> : null}
            <Row>
                {item.ratings.map((ratingInfo) => {
                    return (
                        <Col>
                            <Image src={`img/icons/${ratingInfo.service}.png`} />
                            {`${ratingInfo.rating}${ratingInfo.service === 'rt' ? '%' : ''}`}
                        </Col>
                    );
                })}
            </Row>
            <Row>
                {item.links.map((linkInfo) => {
                    return (
                        <Col>
                            <Image src={`img/icons/${linkInfo.service}.png`} />
                            <Link to={linkInfo.link}>{linkInfo.service === 'imdb' ? 'IMDB Page' : 'Error'}</Link>
                        </Col>
                    );
                })}
            </Row>
            <Row>{item.annotation}</Row>
        </Container>
    );
};

export default ItemInfoDefault;
