import React from "react";
import {
    Card,
    CardBody,
    Table
} from 'reactstrap';

const FriendsCrypto = () => {
    return (
        <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    
                </div>
                <Table className="no-wrap v-middle" responsive>
                <thead>
    <tr className="border-0">
    <th className="border-0" style={{fontSize: '125%'}}>Friends</th>
        <th className="border-0">Content</th>
        <th className="border-0">Comments</th>
        <th className="border-0">Upvotes</th>
        <th className="border-0">Time</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>
            <div className="d-flex no-block align-items-center">
                <div className="">
                    <h5 className="mb-0 font-16 font-medium">Machine  Moving</h5>
                </div>
            </div>
        </td>
        <td>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</td>
        <td>4</td>
        <td>12</td>
        <td>12m ago</td>
    </tr>
    <tr>
        <td>
            <div className="d-flex no-block align-items-center">
                <div className="">
                    <h5 className="mb-0 font-16 font-medium">Crop Identificatoin Error</h5>
                </div>
            </div>
        </td>
        <td>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</td>
        <td>4</td>
        <td>12</td>
        <td>12m ago</td>
    </tr>
    <tr>
        <td>
            <div className="d-flex no-block align-items-center">
                <div className="">
                    <h5 className="mb-0 font-16 font-medium">Post Not Working</h5>
                </div>
            </div>
        </td>
        <td>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</td>
        <td>4</td>
        <td>12</td>
        <td>12m ago</td>
    </tr>

    
    
    
</tbody>
</Table>
            </CardBody>

        </Card>
    );
}

export default FriendsCrypto;
