import React from "react";
import {
    Card,
    CardBody,
    Table,
    Button
} from 'reactstrap';

const Profile = () => {
    return (
        <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    
                </div>
                <Table className="no-wrap v-middle" responsive>
                <thead>
    <tr className="border-0">
    <th className="border-0" style={{fontSize: '160%'}}>Your $EED Profile</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>
            <div className="d-flex no-block align-items-center">
                <div className="">
                <img width="180px"src={"https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"}/>
                </div>
            </div>
        </td>
    <td><Button>Upload New Image</Button></td>
    </tr>
    <tr>
        <td>
            <div className="d-flex no-block align-items-center">
                <div className="">
                    <h2 className="mb-0 font-16 font-medium">Rajan Agarwal</h2>
                </div>
            </div>
        </td>
        <td><input placeholder="Full Name"></input><Button style={{marginLeft: '10px'}}>Save</Button></td>

    </tr>
    <tr>
    <td>
            <div className="d-flex no-block align-items-center">
                <div className="">
                    <h2 className="mb-0 font-16 font-medium">@rajanagarwal</h2>
                </div>
            </div>
        </td>
        <td><input placeholder="Username"></input><Button style={{marginLeft: '10px'}}>Save</Button></td>

    </tr>
    <tr>
    <td>
            <div className="d-flex no-block align-items-center">
                <div className="">
                    <h2 className="mb-0 font-16 font-medium">Coin Holding (Private)</h2>
                </div>
            </div>
        </td>
        <td>2.443</td>

    </tr>
    <tr>
    <td>
            <div className="d-flex no-block align-items-center">
                <div className="">
                    <h2 className="mb-0 font-16 font-medium">Points<select style={{marginLeft: '10px'}}><option>Public</option><option>Private</option></select></h2>
                </div>
            </div>
        </td>
        <td>1149</td>

    </tr>
    <tr>
    <td>
            <div className="d-flex no-block align-items-center">
                <div className="">
                    <h2 className="mb-0 font-16 font-medium">Balance<select style={{marginLeft: '10px'}}><option>Private</option><option>Public</option></select></h2>
                </div>
            </div>
        </td>
        <td>$56.73</td>

    </tr>

    
    
    
</tbody>
</Table>
            </CardBody>

        </Card>
    );
}

export default Profile;
