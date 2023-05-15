import React from "react";
import Container from "react-bootstrap/Container";
import Business from "./Business";
import './BusinessList.css'

function BusinessList(props) {
    return (
        <Container className='business-container'>
            {props.businessList.map(
                (business) =>
                 <Business
                className='business-display'
                businessImage={business.image}
                businessName={business.name}
               businessAddress={business.address}
                businessCity={business.city}
                businessState={business.state}
                businessZipcode={business.zipcode}
                businessCategory={business.category}
                businessRating={business.rating}
                businessReviewCount={business.review_count}
                />
                )}
        </Container>
    );
}

export default BusinessList;

/*

*/