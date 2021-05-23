import React from "react";


import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Input,
    Table
} from 'reactstrap';

const Test = () => {
    return (
        <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle><div style={{fontSize: '130%'}}>FRIENDS</div></CardTitle>
                    </div>
                </div>
                <Table className="no-wrap v-middle" responsive>
                <thead>
    <tr className="border-0">
    <th className="border-0">Team Lead</th>
        <th className="border-0">Project</th>
        <th className="border-0">Project</th>
        <th className="border-0">Project</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>
            <div className="d-flex no-block align-items-center">
                <div className="">
                    <h5 className="mb-0 font-16 font-medium">John Doe</h5><span>50++</span>
                </div>
            </div>
        </td>
        <td>Follows you</td>
        <td>13</td>
        <td className="blue-grey-text  text-darken-4 font-medium">Value Coin</td>
    </tr>
    <tr>
        <td>
            <div className="d-flex no-block align-items-center">
                <div className="">
                    <h5 className="mb-0 font-16 font-medium">John Doe</h5><span>50++</span>
                </div>
            </div>
        </td>
        <td>Follows you</td>
        <td>13</td>
        <td className="blue-grey-text  text-darken-4 font-medium">Value Coin</td>
    </tr>
<tr>
        <td>
            <div className="d-flex no-block align-items-center">
                <div className="">
                    <h5 className="mb-0 font-16 font-medium">John Doe</h5><span>50++</span>
                </div>
            </div>
        </td>
        <td>Follows you</td>
        <td>13</td>
        <td className="blue-grey-text  text-darken-4 font-medium">Value Coin</td>
    </tr>
<tr>
        <td>
            <div className="d-flex no-block align-items-center">
                <div className="">
                    <h5 className="mb-0 font-16 font-medium">John Doe</h5><span>50++</span>
                </div>
            </div>
        </td>
        <td>Follows you</td>
        <td>13</td>
        <td className="blue-grey-text  text-darken-4 font-medium">Value Coin</td>
    </tr>
<tr>
        <td>
            <div className="d-flex no-block align-items-center">
                <div className="">
                    <h5 className="mb-0 font-16 font-medium">John Doe</h5><span>50++</span>
                </div>
            </div>
        </td>
        <td>Follows you</td>
        <td>13</td>
        <td className="blue-grey-text  text-darken-4 font-medium">Value Coin</td>
    </tr>
<tr>
        <td>
            <div className="d-flex no-block align-items-center">
                <div className="">
                    <h5 className="mb-0 font-16 font-medium">John Doe</h5><span>50++</span>
                </div>
            </div>
        </td>
        <td>Follows you</td>
        <td>13</td>
        <td className="blue-grey-text  text-darken-4 font-medium">Value Coin</td>
    </tr>
    
    
</tbody>
</Table>
            </CardBody>

        </Card>
    );
}

export default Test;
