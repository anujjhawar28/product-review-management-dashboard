import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { useTheme } from '../../composables/useTheme'

// Create a mock classList
const mockClassList = {
  add: vi.fn(),
  remove: vi.fn(),
}

describe('useTheme composable', () => {
  let themeHook: ReturnType<typeof useTheme>

  beforeEach(() => {
    // Mock document.documentElement.classList
    Object.defineProperty(document, 'documentElement', {
      value: { classList: mockClassList },
      writable: true,
    })

    // Reset mocks and localStorage
    mockClassList.add.mockReset()
    mockClassList.remove.mockReset()
    localStorage.clear()

    themeHook = useTheme()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should toggle to dark mode correctly', () => {
    themeHook.isDark.value = false
    themeHook.toggleTheme()

    expect(themeHook.isDark.value).toBe(true)
    expect(mockClassList.remove).toHaveBeenCalledWith('my-app-dark')
    expect(localStorage.getItem('theme')).toBe('light')
  })

  it('should toggle to light mode correctly', () => {
    themeHook.isDark.value = true
    themeHook.toggleTheme()

    expect(themeHook.isDark.value).toBe(false)
    expect(mockClassList.add).toHaveBeenCalledWith('my-app-dark')
    expect(localStorage.getItem('theme')).toBe('dark')
  })

  it('should initialize theme as dark from localStorage', () => {
    localStorage.setItem('theme', 'dark')

    themeHook.initTheme()

    expect(themeHook.isDark.value).toBe(true)
    expect(mockClassList.remove).toHaveBeenCalledWith('my-app-dark')
    expect(localStorage.getItem('theme')).toBe('light')
  })

  it('should initialize theme as light from localStorage', () => {
    localStorage.setItem('theme', 'light')

    themeHook.initTheme()

    expect(themeHook.isDark.value).toBe(false)
    expect(mockClassList.add).toHaveBeenCalledWith('my-app-dark')
    expect(localStorage.getItem('theme')).toBe('dark')
  })
})
