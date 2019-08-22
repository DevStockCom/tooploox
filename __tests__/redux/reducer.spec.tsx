import { reducer } from '../../redux/reducer'
import {
  saveUserError,
  saveUserPending,
  saveUserSuccess
} from '../../redux/actions'

describe('redux', () => {
  describe('reducer', () => {
    it('should return the initial state', () => {
      const defaultState = {
        user: null,
        isLoading: false,
        error: null,
      }

      expect(reducer(undefined, { type: ''})).toEqual(defaultState)
    })

    it('should handle saveUserError Action', () => {
      const expectedState = {
        user: null,
        isLoading: false,
        error: 'some error',
      }
      expect(reducer(undefined, saveUserError('some error'))).toEqual(expectedState)
    })
    
    it('should handle saveUserPending Action', () => {
      const expectedState = {
        user: null,
        isLoading: true,
        error: null,
      }

      expect(reducer(undefined, saveUserPending())).toEqual(expectedState)
    })

    it('should handle saveUserSuccess Action', () => {
      const user = {
        avatarUrl: 'a',
        name: 'b',
        login: 'c',
        repos: []
      }

      const expectedState = {
        user,
        isLoading: false,
        error: null,
      }

      expect(reducer(undefined, saveUserSuccess(user))).toEqual(expectedState)
    })
    
  })
})