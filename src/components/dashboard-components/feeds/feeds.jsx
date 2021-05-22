import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle
} from 'reactstrap';

const Feeds = () => {
    return (
        <Card>
            <CardBody>
                <CardTitle><div style={{fontSize: '180%'}}>Welcome, Rajan</div></CardTitle>
                <CardSubtitle style={{fontSize: '140%'}}>Here's a few updates</CardSubtitle>
                <div className="feed-widget">
                    <ul className="list-style-none feed-body m-0 pb-3">
                        <li className="feed-item">
                            <div className="feed-icon bg-info"><i className="far fa-bell"></i></div>Rachael Accepted Your Friend Request<span className="ml-auto font-12 text-muted">Just Now</span>
                        </li>
                        <li className="feed-item">
                            <div className="feed-icon bg-success"><i className="ti-server"></i></div>$SEED hit +5%<span className="ml-auto font-12 text-muted">2 Hours ago</span>
                        </li>
                        <li className="feed-item">
                            <div className="feed-icon bg-warning"><i className="ti-timer"></i></div>Your Product Scan is complete<span className="ml-auto font-12 text-muted">31 May</span>
                        </li>
                        
                    </ul>
                </div>
            </CardBody>
        </Card>
    );
}

export default Feeds;
