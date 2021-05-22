import React from "react";
import {
    Card,
    CardBody,
    Table
} from 'reactstrap';

const Activity = () => {
    return (
        <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    
                </div>
                <Table className="no-wrap v-middle" responsive>
                <thead>
    <tr className="border-0">
    <th className="border-0" style={{fontSize: '130%'}}>Your Activity</th>
        <th className="border-0">Time</th>
        <th className="border-0">Description</th>
        <th className="border-0">Outcome</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>
            <div className="d-flex no-block align-items-center">
                <div className="">
                    <h5 className="mb-0 font-16 font-medium">Post</h5>
                </div>
            </div>
        </td>
        <td>2 hours ago</td>
        <td>I just updated my Growify bot i... <u>read more</u></td>
        <td>3 Upvotes, 2 Comments, 14 Views</td>
    </tr>
    <tr>
        <td>
            <div className="d-flex no-block align-items-center">
                <div className="">
                    <h5 className="mb-0 font-16 font-medium">Discussion</h5>
                </div>
            </div>
        </td>
        <td>3 hours ago</td>
        <td>I need help, my machine barely mo... <u>read more</u></td>
        <td>6 Upvotes, 12 Comments, 54 Views</td>
    </tr>
    <tr>
        <td>
            <div className="d-flex no-block align-items-center">
                <div className="">
                    <h5 className="mb-0 font-16 font-medium">Bought 1 $EED</h5>
                </div>
            </div>
        </td>
        <td>2 hours ago</td>
        <td>Bought $EED at $0.010033003126404013</td>
        <td>Price Increase <b><span>3%</span></b></td>
    </tr>

    
    
    
</tbody>
</Table>
            </CardBody>

        </Card>
    );
}

export default Activity;
