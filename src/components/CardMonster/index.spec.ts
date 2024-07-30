import { mount } from '@vue/test-utils'
import CardMonster from './index.vue'
import { expect, test } from 'vitest'
import { getImageUrl } from '@/utils/getImageUrl'

const monsterMocked = {
  id: 'monster-1',
  name: 'Dead Unicorn',
  attack: 60,
  defense: 40,
  hp: 10,
  speed: 80,
  type: 'Type',
  imageUrl: 'images/dead-unicorn.png'
}

test('Should be render a card text player if not exist monster', () => {
  const wrapper = mount(CardMonster, {
    propsData: {
      monster: null,
      cardText: 'Player'
    }
  })
  const card = wrapper.get('[data-test="card-monster"] h3')
  expect(card.text()).toBe('Player')
})

test('Should be render img src correctly', () => {
  const imgSrc = getImageUrl(monsterMocked.imageUrl)
  expect(imgSrc).toBe('http://localhost:5173/images/dead-unicorn.png')
})

test('Should be render normally', () => {
  const wrapper = mount(CardMonster, {
    propsData: {
      monster: monsterMocked
    }
  })
  expect(wrapper).toMatchSnapshot()
})
