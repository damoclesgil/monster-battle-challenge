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
