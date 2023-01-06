import React, { useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './Navbar.css';
import SearchBar from "../Components/SearchBar";
import GameData from "../Data.json";

export default ham_menu => {  
  const localSignup = localStorage.getItem("signUp")
  let logop, rightB;
  if(localSignup){
    logop ='LOG OUT';
    rightB = 'Welcome '+localStorage.getItem("name")
  }else{
    logop = 'LOG IN';
    rightB = <Link to="/signup">SIGN UP</Link>;
  }
  return (
    <div>
      <header>
        <div id="leftHeader">
          <Menu customBurgerIcon={<img src="photos/menu.png"></img>}>
              <Link id="menu_op" to="/login">LOG IN</Link>
              <hr/>
              <Link id="menu_op" to="/signup">SIGN UP</Link>
              <hr/>
              <Link id="menu_op" to="/donate">DONATE</Link>
              <hr/>
              <a id="menu_op" href="https://twitter.com/Doritozzboi" target="_blank">TWITTER </a>
              <hr/>
              <a id="menu_op" href="https://discord.gg/KuUZZBxh" target="_blank">DISCORD</a>
              <hr/>
              <a id="menu_op" href="https://github.com/Janzokk" target="_blank">GITHUB</a>
              <hr/>
              <a id="menu_op" href="https://www.youtube.com/watch?v=WtGq_FAu_aU" target="_blank">LEGAL</a>

              <img src="photos/logo.png"></img>
              <p>Sprite Games Copyright<br/></p>
              <p>2022</p>
              <img src="photos/monstersinc.png"></img>
            </Menu>
            <Link to="/login">{logop}</Link>
            {rightB}
            

        </div>
        <div id="rightHeader">
          <SearchBar placeholder="Search Game" data={GameData}/>
          <img src='photos/searcher.png' onClick={flip}></img>
        </div>
        </header>
      
      </div>
  );

  function flip() {
    var x = document.getElementById("search");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
};