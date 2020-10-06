import { useRecoilState } from 'recoil'

import { userState } from '../atoms/atom'
import Auth0 from '../../utils/auth0'

export interface Auth0User {
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
export const fetchUser = async () => {
  
}


