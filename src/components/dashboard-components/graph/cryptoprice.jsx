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
    labels: ["2:00", "4:25", "6:13", "9:24", "10:53", "12:03", "13:12", "13:45", "14:30", "14:10", "15:34", "16:23", "17:44", "19:15", "20:20", "20:59", "21:21", "21:42", "22:45", "23:12", "24:00"],
    datasets: [{
        label: '$EED PRICE',
        borderWidth: 1,
        backgroundColor: 'rgba(94,114,228,.1)',
        borderColor: 'rgb(94,114,228)',
        pointBorderColor: 'rgb(94,114,228)',
        pointBackgroundColor: 'rgb(94,114,228)',
        data: [0.0010382, 0.0010847, 0.0013956, 0.0025902, 0.002076, 0.0016723, 0.0015623, 0.00137, 0.0014, 0.00148, 0.0015, 0.0016, 0.00169, 0.0018034, 0.0019, 0.0014090, 0.0015, 0.00153, 0.0028, 0.0018, 0.0019]
    }]
};

const Price = () => {
    return (
        <Card style={{marginBottom: '100px;'}}>
            <CardBody className="bg-darkGreen">
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle><div style={{fontSize: '140%'}}>$EED PRICE (Live)</div></CardTitle>
                    </div>
                    <div className="ml-auto d-flex align-items-center">
                        <ul className="list-inline font-12 dl mr-3 mb-0">
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

export default Price;
