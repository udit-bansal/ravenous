import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Ratio from 'react-bootstrap/Ratio'

const businesses = [{
    image: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: 'Business Name 1',
    address: 'Apt 1, Street Name',
    city: 'city 1',
    state: 'state',
    zipcode: '75024',
    category: 'Restaurant',
    rating: 4.5,
    review_count: 100
}, {
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    name: 'Business Name 2',
    address: 'Apt 2, Street Name',
    city: 'city 2',
    state: 'state',
    zipcode: '75024',
    category: 'Restaurant',
    rating: 3.5,
    review_count: 500
},{
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    name: 'Business Name 2',
    address: 'Apt 2, Street Name',
    city: 'city 2',
    state: 'state',
    zipcode: '75024',
    category: 'Restaurant',
    rating: 3.5,
    review_count: 500
}, {
    image: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: 'Business Name 1',
    address: 'Apt 1, Street Name',
    city: 'city 1',
    state: 'state',
    zipcode: '75024',
    category: 'Restaurant',
    rating: 4.5,
    review_count: 100
},{
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    name: 'Business Name 2',
    address: 'Apt 2, Street Name',
    city: 'city 2',
    state: 'state',
    zipcode: '75024',
    category: 'Restaurant',
    rating: 3.5,
    review_count: 500
}, {
    image: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: 'Business Name 1',
    address: 'Apt 1, Street Name',
    city: 'city 1',
    state: 'state',
    zipcode: '75024',
    category: 'Restaurant',
    rating: 4.5,
    review_count: 100
}, {
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    name: 'Business Name 2',
    address: 'Apt 2, Street Name',
    city: 'city 2',
    state: 'state',
    zipcode: '75024',
    category: 'Restaurant',
    rating: 3.5,
    review_count: 500
}, {
    image: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: 'Business Name 1',
    address: 'Apt 1, Street Name',
    city: 'city 1',
    state: 'state',
    zipcode: '75024',
    category: 'Restaurant',
    rating: 4.5,
    review_count: 100
}];

const business = {
    image: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: 'Business Name 1',
    address: 'Apt 1, Street Name',
    city: 'city 1',
    state: 'state',
    zipcode: '75024',
    category: 'Italian',
    rating: 4.5,
    review_count: 100
}

function Business() {
    return (
        <Card style={{ width: '20rem' }} className="mt-2 mx-auto">
            <Ratio aspectRatio="4x3">
                <Card.Img variant="top" src={business.image} />
            </Ratio>
            <Card.Body>
                <Card.Title><h3 className="text-start" style={{ fontWeight:"bold" }}>{business.name}</h3></Card.Title>
                <Card.Text>
                    <Row>
                        <Col className="mt-2 mx-auto pe-1">
                            <p style={{ lineHeight:"20px" }} className="my-auto text-start">{`${business.address}`}</p>
                            <p style={{ lineHeight:"20px" }} className="my-auto text-start">{`${business.city}`}</p>
                            <p style={{ lineHeight:"20px" }} className="my-auto text-start">{`${business.state} ${business.zipcode}`}</p>
                        </Col>
                        <Col className="mt-2 mx-auto ps-1">
                            <p style={{ color: '#CBA352', lineHeight:"20px", fontWeight:"bold" }} className="my-auto text-end">{`${business.category.toUpperCase()} `}</p>
                            <p style={{ color: '#CBA352', lineHeight:"20px", fontWeight:"bold" }} className="my-auto text-end">{`${business.rating} stars`}</p>
                            <p style={{ lineHeight:"20px" }} className="my-auto text-end">{`${business.review_count} reviews`}</p>
                        </Col>
                    </Row>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Business;