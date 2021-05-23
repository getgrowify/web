import React from 'react';
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardColumns,
    CardGroup,
    CardDeck,
    CardLink,
    CardHeader,
    CardFooter,
    Button,
    Row,
    Col
} from 'reactstrap';
import { Discussion, Trending, Activity } from '../../components/dashboard-components/';

const Cards = () => {
    return (
        <div>
            <h5 className="mb-3" style={{fontSize: '200%'}}>Community</h5>
            <Row>
        <Col xs="12" md="6">
            <Trending />
        </Col>
        <Col xs="12" md="6">
            <Discussion />
            <Activity />
        </Col>
            </Row>
            <h5 className="mb-3" style={{fontSize: '200%'}}>Recent Posts</h5>
            <Row>
                <Col xs="12" md="3">
                    <Card>
                        <CardImg top width="100%" src={"https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3150&q=80"}/>
                        <CardBody>
                            <CardTitle>Post Title Test!</CardTitle>
                            <CardSubtitle>Post Description</CardSubtitle>
                            <CardText>Post Content</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="3">
                    <Card>
                        <CardImg top width="100%" src={"https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80"}/>
                        <CardBody>
                            <CardTitle>Post Title Test!</CardTitle>
                            <CardSubtitle>Post Description</CardSubtitle>
                            <CardText>Post Content</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="3">
                    <Card>
                        <CardImg top width="100%" src={"https://images.unsplash.com/photo-1593179835737-9f82a5f30c68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80"}/>
                        <CardBody>
                            <CardTitle>Post Title Test!</CardTitle>
                            <CardSubtitle>Post Description</CardSubtitle>
                            <CardText>Post Content</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="3"> 
                    <Card>
                        <CardImg top width="100%" src={"https://images.unsplash.com/photo-1585499193151-0f50d54c4e1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3152&q=80"}/>
                        <CardBody>
                            <CardTitle>Post Title Test!</CardTitle>
                            <CardSubtitle>Post Description</CardSubtitle>
                            <CardText>Post Content</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xs="12" md="3">
                    <Card>
                        <CardImg top width="100%" src={"https://images.unsplash.com/photo-1536657464919-892534f60d6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3153&q=80"}/>
                        <CardBody>
                            <CardTitle>Post Title Test!</CardTitle>
                            <CardSubtitle>Post Description</CardSubtitle>
                            <CardText>Post Content</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="3">
                    <Card>
                        <CardImg top width="100%" src={"https://images.unsplash.com/photo-1486328228599-85db4443971f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80"}/>
                        <CardBody>
                            <CardTitle>Post Title Test!</CardTitle>
                            <CardSubtitle>Post Description</CardSubtitle>
                            <CardText>Post Content</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="3">
                    <Card>
                        <CardImg top width="100%" src={"https://images.unsplash.com/photo-1457530378978-8bac673b8062?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3150&q=80"}/>
                        <CardBody>
                            <CardTitle>Post Title Test!</CardTitle>
                            <CardSubtitle>Post Description</CardSubtitle>
                            <CardText>Post Content</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="3">
                    <Card>
                        <CardImg top width="100%" src={"https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80"}/>
                        <CardBody>
                            <CardTitle>Post Title Test!</CardTitle>
                            <CardSubtitle>Post Description</CardSubtitle>
                            <CardText>Post Content</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            
        </div>
    );
}

export default Cards;


