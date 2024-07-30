import { mount } from '@vue/test-utils'
import Button from './index.vue'
import { expect, test } from 'vitest'

const wrapper = mount(Button)
const button = wrapper.get('button')

test('The button need have a text with "Start Battle"', () => {
  expect(button.text()).toBe('Start Battle')
})

test('The button should be dispatch a "click" event', () => {
  wrapper.vm.$emit('click')
  expect(wrapper.emitted().click).toBeTruthy()
})

