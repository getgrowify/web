import React from 'react';
import { Badge, Button, Card, CardBody, CardTitle, Row, Col } from 'reactstrap';
import { Discussion, Trending, Profile, FriendsCrypto, Graph, Price, Cards, Buy } from '../../components/dashboard-components/';

const Crypto = () => {
    return (
        <div>
            <Row>
                <Col xs="12" md="4" sm="4">
                    <Profile />
                    
                </Col>
                <Col xs="12" md="8">
                <FriendsCrypto />
                <FriendsCrypto /> 
                 
                </Col>
                </Row>
                <Row>
                <Col xs="12" md="8" sm="12">
                    <Price />
                </Col>
                <Col xs="12" md="4" sm="12">
                    <Buy />
                </Col>
                
                </Row>
        </div >
    );
}

export default Crypto;
