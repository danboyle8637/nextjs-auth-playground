import { useRecoilState } from 'recoil'

import { userState } from '../atoms/atom'

interface Auth0User {
  name: string // This is actually the email
  nickname: string
  picture: string
  sub: string
  updated_at: string
}

export interface User {
  data: {
    email: string
    nickname: string
    photoUrl: string
  }
  loggedIn: boolean
  loading: boolean
}


// fetches the User data
export const fetchUser = async (): Promise<User> => {
  const userData = await fetch('/api/user', {
    method: "GET"
  })

  const auth0User: Auth0User = await userData.json()

  const data = {
    email: auth0User.name,
    nickname: auth0User.nickname,
    photoUrl: auth0User.picture
  }

  const user = {
    data: data,
    loggedIn: true,
    loading: false,
  }

  return user
}


