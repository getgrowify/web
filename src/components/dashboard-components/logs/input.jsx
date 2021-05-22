import React from "react";
import {
    Card,
    CardBody,
    Table
} from 'reactstrap';

const Input = () => {
    return (
        <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    
                </div>
                <Table className="no-wrap v-middle" responsive>
                <thead>
    <tr className="border-0">
    <th className="border-0" style={{fontSize: '130%'}}>ENVIRONMENT RATING</th>
        <th className="border-0">Temp</th>
        <th className="border-0">Moisture %</th>
        <th className="border-0">Humidity %</th>
    </tr>
</thead>
<tbody>
    <tr style={{backgroundColor: "#f0f7f0"}}>
        <td>
            <div className="d-flex no-block align-items-center">
                <div className="">
                    <h5 className="mb-0 font-16 font-medium">85%</h5>
                </div>
            </div>
        </td>
        <td>21ºC</td>
        <td>40%</td>
        <td>50%</td>
    </tr>
    <tr style={{backgroundColor: '#ffcccb'}}>
        <td>
            <div className="d-flex no-block align-items-center">
                <div className="">
                    <h5 className="mb-0 font-16 font-medium">59%</h5>
                </div>
            </div>
        </td>
        <td>35ºC</td>
        <td>20%</td>
        <td>80%</td>
    </tr>
    <tr style={{backgroundColor: '#90ee90'}}>
        <td>
            <div className="d-flex no-block align-items-center">
                <div className="">
                    <h5 className="mb-0 font-16 font-medium">91% (OPTIMAL)</h5>
                </div>
            </div>
        </td>
        <td><b>21ºC</b></td>
        <td><b>45%</b></td>
        <td><b>60%</b></td>
    </tr>
    <tr style={{backgroundColor: '#f0f7f0'}}>
        <td>
            <div className="d-flex no-block align-items-center">
                <div className="">
                    <h5 className="mb-0 font-16 font-medium">85%</h5>
                </div>
            </div>
        </td>
        <td>18ºC</td>
        <td>40%</td>
        <td>55%</td>
    </tr>
    
    
    
</tbody>
</Table>
            </CardBody>

        </Card>
    );
}

export default Input;
