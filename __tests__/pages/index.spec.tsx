import * as React from 'react'
import {mount} from 'enzyme'
import { Provider } from "react-redux"
import configureMockStore from "redux-mock-store"

import Index from '../../pages/index'
import SearchUser from '../../components/SearchUser'
import DetailsUser from '../../components/DetailsUser'
import NotFound from '../../components/shared/NotFound'

const mockStore = configureMockStore()
const store = mockStore({
  fetchUserData: jest.fn(),
  user: {
    repos: []
  },
  error: null
})

describe('pages', () => {
  const wrap = mount(
    <Provider store={store}>
      <Index />
    </Provider>
  )

  describe('Index', () => {
    it('should render without any errors', () => {
      expect(wrap.find(SearchUser).exists()).toEqual(true)
      expect(wrap.find('h1').first().text()).toEqual('Tooploox')
    })
    
    it('should render DetailsUser component', () => {
      expect(wrap.find(DetailsUser).exists()).toEqual(true)
    })

    it('should render NotFound component', () => {
      const storeWithoutUser = mockStore({
        fetchUserData: jest.fn(),
        user: null,
        error: 'No Data'
      })

      const wrapWithoutUser = mount(
        <Provider store={storeWithoutUser}>
          <Index />
        </Provider>
      )
    
      expect(wrapWithoutUser.find(NotFound).exists()).toEqual(true)
    })
  })
})