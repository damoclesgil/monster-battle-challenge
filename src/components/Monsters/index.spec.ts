import { mount } from '@vue/test-utils'
import Monsters from './index.vue'
import { describe, expect, it, test } from 'vitest'

describe('Monsters', () => {
  it('Should be render a Monsters Component Normally', () => {
    const wrapper = mount(Monsters)
    expect(wrapper).toMatchSnapshot()
  })
})
