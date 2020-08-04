/* Dependencies */
import React from 'react'
import { setup } from '../../utils/enzyme'
import { shallow } from 'enzyme'

/* Components */
import List from './'
import Paragraph from '../Paragraph'

setup() // Configuring enzyme

describe('List', () => {
  it('should render `This list is empty` inside a Paragraph component if items is an empty array', () => {
    const wrapper = shallow(<List items={[]} />)
    const paragraph = wrapper.find(Paragraph)
    expect(paragraph.props().children).toEqual('This list is empty')
  })

  it('should render a list with the body of each item inside a div', () => {
    const itemsArray = [{ id: 1, body: 'Shopping' }, { id: 2, body: 'Exercise' }, { id: 3, body: 'Cook' }]
    const wrapper = shallow(<List items={itemsArray} />)

    const items = wrapper.find('div[class="item"]')
    expect(items).toHaveLength(itemsArray.length)
    expect(items.first().text()).toEqual('Shopping')
  })
})