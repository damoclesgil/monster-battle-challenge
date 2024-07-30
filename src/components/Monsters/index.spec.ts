import { mount } from '@vue/test-utils'
import Monsters from './index.vue'
import { expect, test } from 'vitest'

test('Should be render a Monsters Component Normally', () => {
  const wrapper = mount(Monsters)

  expect(wrapper).toMatchSnapshot()
})
