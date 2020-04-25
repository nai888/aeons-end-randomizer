import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import 'normalize.css/normalize.css'

import './App.sass'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router basename='aeons-end-randomizer'>
      <div className='App'>
        <Header />
        <Sidebar />
        <Main />
        <Footer />
      </div>
    </Router>
  )
}

export default App
