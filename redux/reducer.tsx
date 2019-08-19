import { IUser, ActionTypes } from "./types";

interface IAction {
  type: string,
  user?: IUser,
  error?: string,
}

export interface IState {
  user: IUser | null | undefined,
  isLoading: boolean,
  error: string | null | undefined,
}


const defaultState = {
  user: null,
  isLoading: false,
  error: null,
}

export const reducer = (state: IState = defaultState, action: IAction) => {
  switch (action.type) {
    case ActionTypes.SAVE_USER_SUCCESS:
      return {
        isLoading: false,
        user: action.user,
        error: null
      }
    case ActionTypes.SAVE_USER_ERROR:
      return {
        isLoading: false,
        user: null,
        error: action.error
      }
    case ActionTypes.SAVE_USER_PENDING:
      return {
        isLoading: true,
        user: null,
        error: null
      }
    default:
      return state
  }
}