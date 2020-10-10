import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { currentUserIDState, userNameQuery } from '../store'

const CurrentUserInfo = () => {
  const userName = useRecoilValue(userNameQuery)
  const [id, setID] = useRecoilState(currentUserIDState)

  const onChange = e => {
    setID(e.target.value)
  }

  return <>
    <input value={id} onChange={onChange} />
    <div>{userName}</div>
  </>
}

export default CurrentUserInfo
