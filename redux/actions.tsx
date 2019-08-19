import { ActionTypes } from "./types";

export const saveUserSuccess = (user: object) => {
  return { type: ActionTypes.SAVE_USER_SUCCESS, user }
}

export const saveUserError = (error: string) => {
  return { type: ActionTypes.SAVE_USER_ERROR, error }
}

export const saveUserPending = () => {
  return { type: ActionTypes.SAVE_USER_PENDING }
}