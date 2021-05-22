import React from 'react';
import {
    Row, Col
} from 'reactstrap';
import { Graph, Test, Feeds, Friends, Price, Buy2 } from '../../components/dashboard-components/';

const Starter = () => {
    return (
        <div>
            <Row>
            <Col sm={6} lg={4}>
                    <Feeds />
                </Col>
                <Col sm={6} lg={8}>
                    <Graph />
                </Col>
                
            </Row>
            <Row>
                <Col sm={12} lg={6}>
                    <Price />
                    <Buy2 />
                    
                </Col>
                <Col sm={12} lg={6}>
                <Test />
                </Col>
            </Row>
            
            
            
        </div>
    );
}

export default Starter; 
