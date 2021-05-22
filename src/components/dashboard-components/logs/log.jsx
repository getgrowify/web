import React from "react";
import {
    Card,
    CardBody,
    Table
} from 'reactstrap';

const Log = () => {
    return (
        <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    
                </div>
                <Table className="no-wrap v-middle" responsive>
                <thead>
    <tr className="border-0">
    <th className="border-0" style={{fontSize: '130%'}}>LIVE FEED</th>
        <th className="border-0">Metric</th>
        <th className="border-0">Time</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>
            <div className="d-flex no-block align-items-center">
                <div className="">
                    <h5 className="mb-0 font-16 font-medium">Humidity</h5>
                </div>
            </div>
        </td>
        <td>60%</td>
        <td>4m ago</td>
    </tr>
    <tr>
        <td>
            <div className="d-flex no-block align-items-center">
                <div className="">
                    <h5 className="mb-0 font-16 font-medium">Soil Moisture</h5>
                </div>
            </div>
        </td>
        <td>72%</td>
        <td>13m ago</td>
    </tr>
    <tr>
        <td>
            <div className="d-flex no-block align-items-center">
                <div className="">
                    <h5 className="mb-0 font-16 font-medium">Temperature</h5>
                </div>
            </div>
        </td>
        <td>25º C</td>
        <td>25m ago</td>
    </tr>
    <tr>
        <td>
            <div className="d-flex no-block align-items-center">
                <div className="">
                    <h5 className="mb-0 font-16 font-medium">Soil Moisture</h5>
                </div>
            </div>
        </td>
        <td>56%</td>
        <td>28m ago</td>
    </tr>
    
    
    
</tbody>
</Table>
            </CardBody>

        </Card>
    );
}

export default Log;
