import { atom, selector } from 'recoil'
import { fetchUser } from '../requests/fetchUser'

export const emailAddressFieldState = atom({
  key: 'emailAddressFieldState',
  default: '', 
});

export const currentProgram = atom({
  key: "currentProgram",
  default: "Row Row Clean Clean"
})

export const activeWorkout = atom({
  key: "activeWorkout",
  default: "The Real Pump"
})

export const loggedInUser = atom({
  key: "loggedInUser",
  default: "Ladnik"
})

export const currentUserState = atom({
  key: 'CurrentUserID',
  default: {
    email: '',
    nickname: '',
    photoUrl: ''
  },
});

export const currentUserQuery = selector({
  key: 'CurrentUserName',
  get: async ({get}) => {
    const request = await fetchUser()
    return request
  },
});