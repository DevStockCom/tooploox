import { Dispatch } from "redux";

import {
  saveUserError,
  saveUserPending,
  saveUserSuccess
} from './actions'

import { IRepo } from "./types";

interface IRepoBackend {
  id: number,
  name: string,
  html_url: string,
  stargazers_count: number,
}

export const fetchUserData = (user : string) => async (dispatch : Dispatch) => {
  dispatch(saveUserPending())
  const data = await fetch(`https://api.github.com/users/${user}`)
    .then(res => {
      if (res.status !== 200) {
        return null
      }

      return res.json()
    })

  if (!data) {
    return dispatch(saveUserError('User not found'))
  }

  const userData = {
    avatarUrl: data.avatar_url,
    name: data.name,
    login: data.login,
    repos: [],
  }

  const repos = await fetch(data.repos_url)
    .then(res => res.json())

  const sortRepos = (a: IRepo, b: IRepo) => {
    if (a.stars === b.stars) {
      return 0
    }

    return a.stars > b.stars ? -1 : 1
  }

  userData.repos = repos.map(({ id, name, html_url, stargazers_count} : IRepoBackend) => ({
    id,
    name,
    url: html_url,
    stars: stargazers_count
  })).sort(sortRepos)

  dispatch(saveUserSuccess(userData))
}