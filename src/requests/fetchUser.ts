interface UserData {
  name: string // This is actually the email
  nickname: string
  picture: string
  sub: string
  updated_at: string
}

export interface User {
  email: string
  nickname: string
  photoUrl: string
}

export const fetchUser = async (): Promise<User> => {
  const user = await fetch('/api/user', {
    method: "GET"
  })

  const userData: UserData = await user.json()

  return {
    email: userData.name,
    nickname: userData.nickname,
    photoUrl: userData.picture
  }
}

