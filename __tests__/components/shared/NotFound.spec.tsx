
import * as React from 'react'
import {mount} from 'enzyme'
import NotFound from '../../../components/shared/NotFound'

describe('Components', () => {
  describe('Shared', () => {
    describe('NotFound', () => {
      it('should render provided text', function () {
        const wrap = mount(<NotFound text="Empty" />)
        expect(wrap.text()).toBe('Empty')
      })
    })  
  })
})