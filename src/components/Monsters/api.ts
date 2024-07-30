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
  tie: boolean
}

export type MONSTER_iDS = {
  monsterIdPlayer: string
  monsterIdComputer: string
}

export const getMonsters = () => {
  return fetch(`${apiUrl}/monsters`).then((res) => res.json())
}

export const setBattle = async (ids: MONSTER_iDS) => {
  const request = new Request(`${apiUrl}/battle`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      monsterIdPlayer: ids.monsterIdPlayer,
      monsterIdComputer: ids.monsterIdComputer
    })
  })
  try {
    const response = await fetch(request)
    const result = await response.json()
    return result.winner
  } catch (error) {
    console.error('Error:', error)
  }
}
