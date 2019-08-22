
import * as React from 'react'
import {mount} from 'enzyme'
import Layout from '../../../components/shared/Layout'

describe('Components', () => {
  describe('Shared', () => {
    describe('Layout', () => {
      it('should render with children', function () {
        const wrap = mount(<Layout><h1>Children</h1></Layout>)
        expect(wrap.find('h1').text()).toBe('Children')
      })
    })  
  })
})