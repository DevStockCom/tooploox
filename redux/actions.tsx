import { ActionTypes, IUser } from "./types";

export const saveUserSuccess = (user: IUser) => {
  return { type: ActionTypes.SAVE_USER_SUCCESS, user }
}

export const saveUserError = (error: string) => {
  return { type: ActionTypes.SAVE_USER_ERROR, error }
}

export const saveUserPending = () => {
  return { type: ActionTypes.SAVE_USER_PENDING }
}