import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import RightNav from '../pages/Shared/RightNav/RightNav';
import RootNewsFeed from '../pages/Home/NewsFeed/RootNewsFeed/RootNewsFeed';

const RootLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container className='mt-3'>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        {/* <Outlet></Outlet> */}
                        <RootNewsFeed></RootNewsFeed>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;