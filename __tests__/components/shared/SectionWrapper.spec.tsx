
import * as React from 'react'
import {mount} from 'enzyme'
import SectionWrapper from '../../../components/shared/SectionWrapper'

describe('Components', () => {
  describe('Shared', () => {
    describe('SectionWrapper', () => {
      it('should render with children', function () {
        const wrap = mount(<SectionWrapper><h1>Children</h1></SectionWrapper>)
        expect(wrap.find('h1').text()).toBe('Children')
      })
    })  
  })
})