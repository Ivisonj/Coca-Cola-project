import { create } from 'zustand'

export const useStore = create(set => ({
    buttonState: false,
    toggleButton: () => set(state => ({ buttonState: !state.buttonState }))
}))

export const useLeftButton = create(set => ({
    leftButtonState: false,
    setLeftButtonState: (newState) => set({ leftButtonState: newState }),
  }))
  
  export const useRightButton = create(set => ({
    rightButtonState: false,
    setRightButtonState: (newState) => set({ rightButtonState: newState }),
  }))
  