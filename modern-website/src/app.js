import React from 'react';
import './app.css';
import {Footer, Blog, Possibility, Features, WhatGpt3, Header } from './containers'
import {CTA, Brand, Navbar} from './components'

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGpt3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App;