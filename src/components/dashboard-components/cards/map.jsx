import React from 'react';
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Row,
    Col
} from 'reactstrap';

const Map = () => {
    return (
        <div>
                    <Card height="50%;">
                    <CardBody>
                            <CardTitle style={{fontSize: '130%'}}>EXPLORE VR MODEL</CardTitle>
                        <CardSubtitle>Our Actual Product</CardSubtitle>
                       <Button>Take Me There!</Button>
                        </CardBody>
                    
                        <CardImg top width="100%" src={"https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"} />
                        
                    </Card>
        </div>
    );
}

export default Map;


