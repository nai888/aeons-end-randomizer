import React from 'react'
import ReactDOM from 'react-dom'

import Nemesis from '.'

describe('Nemesis page', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Nemesis />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})