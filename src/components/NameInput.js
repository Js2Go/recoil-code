import React from 'react'
import { useRecoilState } from 'recoil'
import { nameState } from '../store'

const NameInput = () => {
  const [name, setName] = useRecoilState(nameState)
  const onChange = e => {
    setName(e.target.value)
  }

  return <>
    <input type="text" value={name} onChange={onChange} />
    <div>Name: {name}</div>
  </>
}

export default NameInput
