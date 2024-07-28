import { apiUrl } from '@/utils/constants'

export type MONSTER = {
  id: string
  name: string
  attack: number
  defense: number
  hp: number
  speed: number
  type: string
  imageUrl: string
}

export const getMonsters = () => {
  return fetch(`${apiUrl}/defaultMonsters`).then((res) => res.json())
}

export const setBattle = async () => {
  const response = await fetch(`${apiUrl}/battle`, {
    method: 'POST',
    body: JSON.stringify({
      monster1Id: 'monster-1',
      monster2Id: 'monster-2'
    })
  })
  return response
}
