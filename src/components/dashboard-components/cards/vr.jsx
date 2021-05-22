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

const Cards = () => {
    return (
        <div>
                    <Card>
                        <CardImg top width="100%" src={"https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"} />
                        <CardBody>
                            <CardTitle style={{fontSize: '150%'}}>LIVE PRODUCT VIEW</CardTitle>
                            <CardSubtitle>Explore VR Simulation</CardSubtitle>
                             <Button>Take me there</Button>
                        </CardBody>
                    </Card>
        </div>
    );
}

export default Cards;


