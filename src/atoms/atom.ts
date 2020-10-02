import { atom } from 'recoil'

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