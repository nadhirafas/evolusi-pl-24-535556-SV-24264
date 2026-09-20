import { describe, expect, it } from 'vitest'
import { formatUser } from '../formatUser'

describe('formatUser', () => {
  it('menggabungkan nama dan email user', () => {
    const user = {
      name: 'Budi',
      email: 'budi@example.com'
    }

    expect(formatUser(user)).toBe('Budi - budi@example.com')
  })
})