import React from 'react';
import './header.css'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

function Header() {
  return (
    <div className="gpt3__header section__padding" id='home'>
      <div className="gpt3__header-content">
        <h1 className="gradiant__text">
          Let's Build somthing amazing with GPT-3 OpenAI 
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptate suscipit hic repudiandae! Reprehenderit cum laborum aliquam fugit incidunt fuga?</p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder='your email address' />
          <button type='button'>Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
        </div>
      </div>
    </div>
  )
}

export default Header