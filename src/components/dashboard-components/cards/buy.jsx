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

const Buy = () => {
    return (
        <div>
                    <Card height="50%;">
                    <CardBody>
                            <CardTitle style={{fontSize: '130%'}}><b>BUY & SELL $EED</b></CardTitle>
                        <CardSubtitle>Our Very Own Crypto</CardSubtitle>
                        <CardTitle style={{fontSize: '125%'}}>Current Price: $0.010033003126404013</CardTitle>
                        <CardTitle style={{fontSize: '125%'}}>Users Active: 773</CardTitle>
                        <CardTitle style={{fontSize: '125%'}}>Current Ratio: 270:1</CardTitle>
                        <CardTitle style={{fontSize: '125%'}}>Token ID: 1920939820129</CardTitle>
                        <CardTitle style={{fontSize: '125%'}}>Last Action: <i>Buy 1 $EED</i></CardTitle>
                       <Button href="https://replit.com/@GEEGABYTE1/MustyUnwittingAlgorithms#main.py" target="_blank">Take Me There! (Make Sure to Run it!)</Button>
                        </CardBody>
                    
            
                        
                    </Card>
        </div>
    );
}

export default Buy;


