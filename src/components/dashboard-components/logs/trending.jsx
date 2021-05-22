import React from "react";
import {
    Card,
    CardBody,
    Table,
    Button
} from 'reactstrap';

const Trending = () => {
    return (
        <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    
                </div>
                <Table className="no-wrap v-middle" responsive>
                <thead>
    <tr>
    <th style={{fontSize: '160%'}}>Create a Post</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>
            <div className="d-flex no-block align-items-center">
                <div className="">
<input placeholder="Post Title"></input>
                </div>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div className="d-flex no-block align-items-center">
                <div className="">
                <input placeholder="Post Subtitle"></input>
                </div>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div className="d-flex no-block align-items-center">
                <div className="">
<select>
    <option>Post</option>
    <option>Discussion</option>

</select>
                </div>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div className="d-flex no-block align-items-center">
                <div className="">
                <textarea rows="5" cols="100" placeholder="What do you want to post?"></textarea>
                
                </div>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div className="d-flex no-block align-items-center">
                <div className="">
                <Button>Import Image</Button>
                    
                </div>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div className="d-flex no-block align-items-center">
                <div className="">
                <Button>Post!</Button>
                    
                </div>
            </div>
        </td>
    </tr>
    
    
    
</tbody>
</Table>
            </CardBody>

        </Card>
    );
}

export default Trending;
