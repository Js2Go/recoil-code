import { atom, selector } from 'recoil'
import axios from 'axios'

export const nameState = atom({
  key: 'nameState',
  default: 'ConardLi'
})

export const lengthState = selector({
  key: 'lengthState',
  get: ({ get }) => {
    const text = get(nameState)
    return text.length
  }
})

export const currentUserIDState = atom({
  key: 'currentUserID',
  default: '0'
})

export const userNameQuery = selector({
  key: 'userName',
  get: async ({ get }) => {
    const resp = await axios.get('http://localhost:8090', {
      params: {
        userID: get(currentUserIDState),
      }
    })
    console.log(resp)
    return resp.data.name
  }
})
