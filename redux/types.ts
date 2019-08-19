export interface IUser {
  avatarUrl: string,
  name: string,
  login: string,
  repos: IRepo[]
}

export enum ActionTypes {
  SAVE_USER_SUCCESS = 'SAVE_USER_SUCCESS',
  SAVE_USER_ERROR = 'SAVE_USER_ERROR',
  SAVE_USER_PENDING = 'SAVE_USER_PENDING',
}

export interface IRepo {
  id: number,
  name: string,
  url: string,
  stars: number,
}
