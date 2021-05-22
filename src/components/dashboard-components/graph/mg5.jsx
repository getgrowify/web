import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Col,
    Row
} from 'reactstrap';
import { Bar } from 'react-chartjs-2';

let lineData = {
    labels: ["RCE", "MZE", "CKP", "KDP", "PGP", "MTB", "MGB", "LEN", "PGN", "BNA", "MGO", "GPS", "WAM", "MUM", "APL", "ORG", "PPY", "CCN", "CTN", "JTE", "CFF"],
    datasets: [{
        label: 'Jute',
        borderWidth: 1,
        backgroundColor: 'rgba(94,114,228,.1)',
        borderColor: 'rgb(94,114,228)',
        pointBorderColor: 'rgb(94,114,228)',
        pointBackgroundColor: 'rgb(94,114,228)',
        data: [82, 66, 18, 23, 55, 58, 84, 61, 60, 91, 80, 50, 82, 50, 84, 87, 89, 90, 95, 95, 94, 94, 97, 80, 79, 60]
    }]
};

const MG5 = () => {
    return (
        <Card style={{marginBottom: '100px;'}}>
            <CardBody className="bg-darkGreen">
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle><div style={{fontSize: '140%'}}>PLANT STATUS</div></CardTitle>
                    </div>
                    <div className="ml-auto d-flex align-items-center">
                        <ul className="list-inline font-12 dl mr-3 mb-0">
                            <h4><u><a href="#/maintenance">ML Model</a></u></h4>
                        </ul>
                    </div>
                </div>
                <Row>
                    <Col lg="12">
                        <div className="campaign ct-charts">
                            <div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 250 }}>
                                <Bar data={lineData} options={{ maintainAspectRatio: false, legend: { display: false, labels: { fontFamily: "Nunito Sans" } }, scales: { yAxes: [{ stacked: true, gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }] } }} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
}

export default MG5;
