import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return(
    <div className='home'>
        <div id="title"><h1>Sprite Games</h1></div>
        <div id="images">
            <div id='row'>
                <Link to='/game'><div id="img1"></div></Link>
                <Link to='/game'><div id="img1"></div></Link>
                <Link to='/game'><div id="img1"></div></Link>
                <Link to='/game'><div id="img1"></div></Link>
            </div>
            <div id='row'>
                <Link to='/game'><div id="img1"></div></Link>
                <Link to='/game'><div id="img1"></div></Link>
                <Link to='/game'><div id="img1"></div></Link>
                <Link to='/game'><div id="img1"></div></Link>
            </div>
        </div>
   </div>
    );
}



export default Home;