import * as React from 'react'
import {mount} from 'enzyme'
import { Input, Button } from 'reactstrap';
import SearchUser from '../../components/SearchUser'

const props = {
  onSearch: jest.fn()
}

describe('Components', () => {
  describe('SearchUser', () => {
    it('should render without any errors', () => {
      const wrap = mount(<SearchUser onSearch={props.onSearch} />)

      expect(wrap.find(Input).exists()).toEqual(true)
      expect(wrap.find(Button).exists()).toEqual(true)
    })

    it('should run onSearch method with proper param', () => {
      const wrap = mount(<SearchUser onSearch={props.onSearch} />)
      const button = wrap.find(Button)
      const input = wrap.find(Input)

      input.simulate('change', { target: { value: 'DevStockCom' } })
      expect(props.onSearch).not.toHaveBeenCalled()

      button.simulate('click')
      expect(props.onSearch).toHaveBeenCalledWith('DevStockCom')
    })

    it('should run onSearch method with enter keydown', () => {
      const wrap = mount(<SearchUser onSearch={props.onSearch} />)

      const input = wrap.find(Input)
      input.simulate('change', { target: { value: 'test' } })

      wrap.simulate('keypress', { key: 'Enter' })
      expect(props.onSearch).toHaveBeenCalledWith('test')
    })
  })
})