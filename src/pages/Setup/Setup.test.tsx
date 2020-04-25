import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import data from '../../data'

import Setup from '.'

const DEFAULTDATA = data.DEFAULTDATA

describe('Setup page', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Router>
        <Setup data={DEFAULTDATA} setData={() => DEFAULTDATA} />
      </Router>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
