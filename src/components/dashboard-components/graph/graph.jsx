import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Col,
    Row
} from 'reactstrap';
import { Line } from 'react-chartjs-2';

let lineData = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    datasets: [{
        label: 'Humidity',
        borderWidth: 1,
        backgroundColor: 'rgba(94,114,228,.1)',
        borderColor: 'rgb(94,114,228)',
        pointBorderColor: 'rgb(94,114,228)',
        pointBackgroundColor: 'rgb(94,114,228)',
        data: [10.0, 1.5, 6, 1.1, 2.5, 9, 1.8, 2.4]
    }, {
        label: 'Soil Thing',
        borderWidth: 1,
        backgroundColor: 'rgba(79,195,247,.1)',
        borderColor: 'rgb(79,195,247)',
        pointBorderColor: 'rgb(79,195,247)',
        pointBackgroundColor: 'rgb(79,195,247)',
        data: [0, 8, 1.1, 2.2, 8, 1.0, 5, 2.1]
    },  {
        label: 'Rice',
        borderWidth: 1,
        backgroundColor: 'rgba(179,91,245,.1)',
        borderColor: 'rgb(94,114,228)',
        pointBorderColor: 'rgb(94,114,228)',
        pointBackgroundColor: 'rgb(94,114,228)',
        data: [3, 5, 6.1, 1, 2.5, 1, 2.8, 9.2]
    }]
};

const Graph = () => {
    return (
        <Card style={{marginBottom: '100px;'}}>
            <CardBody className="bg-darkGreen">
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle><div style={{fontSize: '140%'}}>Your Plant Status</div></CardTitle>
                    </div>
                    <div className="ml-auto d-flex align-items-center">
                        <ul className="list-inline font-12 dl mr-3 mb-0">
                            <h4><u><a href="#/maintenance">Advanced Analytics</a></u></h4>
                        </ul>
                    </div>
                </div>
                <Row>
                    <Col lg="12">
                        <div className="campaign ct-charts">
                            <div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 250 }}>
                                <Line data={lineData} options={{ maintainAspectRatio: false, legend: { display: false, labels: { fontFamily: "Nunito Sans" } }, scales: { yAxes: [{ stacked: true, gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }] } }} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
}

export default Graph;
