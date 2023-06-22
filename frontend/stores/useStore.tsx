import { create } from 'zustand'

export const useStore = create(set => ({
    buttonState: false,
    toggleButton: () => set(state => ({ buttonState: !state.buttonState }))
}))