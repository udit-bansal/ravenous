import React from 'react';

const businesses = [{
    image : "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name : 'Business Name',
    address : 'Apt, Street Name',
    city : 'city',
    state : 'state',
    zipcode : '75024',
    category : 'restaurant',
    rating : 4.5,
    review_count : 100
}];

/*let displayBusiness = businesses.map(business => {
    return (
        "</div>" +
        "<img src = " + business.image + " />" +
        "<h1>" + business.name + "</h1>"
        + "<h3>" + business.category + "</h3>"
        + "<p>" +
        business.address
        + "<br/>" +
        business.city
        + "<br/>" +
        business.state
        + "<br/>" +
        business.zipcode
        + "<br/>" +
        business.rating
        + "<br/>" +
        business.review_count
        + "</p>"
        + "</div>"
    )
})*/

function Business() {
    return(
        <div>
            <img src = {businesses[0].image} />
            <h1>{businesses[0].name}</h1>
            <h3>{businesses[0].category}</h3>
            <p>
                {businesses[0].address}
                <br/>
                {businesses[0].city}
                <br/>
                {businesses[0].state}
                <br/>
                {businesses[0].zipcode}
                <br/>
                {businesses[0].rating}
                <br/>
                {businesses[0].review_count}
            </p>
        </div>
    )
}

function BusinessList() {
    return(
        <div>
            <Business/>
            <Business/>
            <Business/>
        </div>
    )
}

export default BusinessList;