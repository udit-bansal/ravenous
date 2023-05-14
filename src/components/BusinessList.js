import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Business from "./Business";

function BusinessList() {
    return (
        <div className='mt-4 mx-4'>
            <Row xs={1} lg="auto" className="justify-content-md-center">
                <Col><Business /></Col>
                <Col><Business /></Col>
                <Col><Business /></Col>
            </Row>
            <Row xs={1} lg="auto" className="justify-content-md-center">
                <Col><Business /></Col>
                <Col><Business /></Col>
                <Col><Business /></Col>
            </Row>
        </div>
    );
}

export default BusinessList;