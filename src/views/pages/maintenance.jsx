import React, { useState } from 'react';
import {
    Card,
    CardBody,
    CardTitle
} from 'reactstrap';
import { Graph, Test, Map, Log, Cards, MG1, Input, Explore, MG2, MG3, MG4, MG5, MG6, MG7 } from '../../components/dashboard-components/';
import { Row, Col } from 'reactstrap';

const Maintenance = () => {
    const [visible, setVisible] = useState(true);
    const onDismiss = () => {
        setVisible(false);
    }

    return (
        <div>
            <Row>
                <Col sm={12} lg={12}>
                    <Graph />
                </Col>
                
            </Row>
            <Row>
            <Col sm={12} lg={4}>
                    <Log />
                </Col>
            <Col sm={12} lg={8}>
                    <Input />
                </Col>
                <Col sm={12} lg={4}>
                    <MG1 />
                </Col>
                <Col sm={12} lg={4}>
                    <MG2 />
                </Col>
                <Col sm={12} lg={4}>
                    <MG3 />
                </Col>
                
            </Row>
            <Row>
            <Col sm={12} lg={6}>
                    <Map />
                </Col>
                <Col sm={12} lg={6}>
                    <Explore />
                </Col>
            </Row>
        </div>
    );
}

export default Maintenance;
