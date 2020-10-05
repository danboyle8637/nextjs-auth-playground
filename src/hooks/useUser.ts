import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

import { fetchUser } from '../requests/fetchUser'
import { userState } from '../atoms/atom'

const useUser = () => {
  const [user, setUser] = useRecoilState(userState)

  useEffect(() => {

    if (user.loggedIn) {
      return
    }

    setUser({
      ...user,
      loading: true
    })

    fetchUser()
      .then(user => {
        setUser({
          ...user,
          loading: false
        })
      })
      .catch(error => {
        console.log(error)
      })

  }, [user])

  return user
}

export default useUser