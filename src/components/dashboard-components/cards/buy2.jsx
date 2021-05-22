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

const Buy2 = () => {
    return (
        <div>
                    <Card height="50%;">
                    <CardBody>
                            <CardTitle style={{fontSize: '150%'}}>BUY & SELL $EED</CardTitle>
                        <CardSubtitle>Our Very Own Crypto</CardSubtitle>
                        <CardTitle style={{fontSize: '125%'}}>Current Price: $0.010033003126404013</CardTitle>
                        <CardTitle style={{fontSize: '125%'}}>Users Active: 773</CardTitle>
                        <CardTitle style={{fontSize: '125%'}}>Current Ratio: 270:1</CardTitle>
                        <CardTitle style={{fontSize: '125%'}}>Last Action: <i>Buy 1 $EED</i></CardTitle>
                       <Button href="https://replit.com/@GEEGABYTE1/MustyUnwittingAlgorithms#main.py" target="_blank">Take Me There! (Make Sure to Run it!)</Button>
                        </CardBody>
                    
            
                        
                    </Card>
        </div>
    );
}

export default Buy2;


