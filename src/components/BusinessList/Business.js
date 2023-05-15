import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Ratio from 'react-bootstrap/Ratio';

function Business(props) {
    return (
        <Card style={{ width: '20rem' }} className="mt-2 mx-auto">
            <Ratio aspectRatio="4x3">
                <Card.Img variant="top" src={props.businessImage} />
            </Ratio>
            <Card.Body>
                <Card.Title><h3 className="text-start" style={{ fontWeight:"bold" }}>{props.businessName}</h3></Card.Title>
                <Card.Text>
                    <Row>
                        <Col className="mt-2 mx-auto pe-1">
                            <p style={{ lineHeight:"20px" }} className="my-auto text-start">{`${props.businessAddress}`}</p>
                            <p style={{ lineHeight:"20px" }} className="my-auto text-start">{`${props.businessCity}`}</p>
                            <p style={{ lineHeight:"20px" }} className="my-auto text-start">{`${props.businessState} ${props.businessZipcode}`}</p>
                        </Col>
                        <Col className="mt-2 mx-auto ps-1">
                            <p style={{ color: '#CBA352', lineHeight:"20px", fontWeight:"bold" }} className="my-auto text-end">{`${props.businessCategory.toUpperCase()} `}</p>
                            <p style={{ color: '#CBA352', lineHeight:"20px", fontWeight:"bold" }} className="my-auto text-end">{`${props.businessRating} stars`}</p>
                            <p style={{ lineHeight:"20px" }} className="my-auto text-end">{`${props.businessReviewCount} reviews`}</p>
                        </Col>
                    </Row>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Business;