import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import bgImage from './background_search_desktop.jpg';
import Ratio from 'react-bootstrap/Ratio';
import './SearchBar.css'

function Sort() {
    return (
        <div className='sort-container'>
            <div className='sort-buttons'>
                <Button variant='link' >Best Match</Button>
                <Button variant='link' >Highest Rated</Button>
                <Button variant='link' >Most Reviewed</Button>
            </div>
            <hr />
        </div>
    )
}

function Search() {
    return (
        <div className='search'>
            <Sort />
            <div className='search-container'>
                <div className='search-inputs'>
                    <input type='search' id='terms' placeholder='Asian'></input>
                    <input type='search' id='location' placeholder='Location'></input>
                </div>
                <input className='submit-button' type='button' id='lets_go' value="Let's Go"></input>

            </div>
        </div>
    )
}

export default Search;