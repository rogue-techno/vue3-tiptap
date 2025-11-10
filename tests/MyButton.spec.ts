import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import MyButton from '../src/components/MyButton.vue'

describe('MyButton', () => {
  it('renders slot content', () => {
    const wrapper = mount(MyButton, { slots: { default: 'Click me' } })
    expect(wrapper.text()).toBe('Click me')
  })
})
