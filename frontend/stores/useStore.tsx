import { create } from 'zustand'

interface useStoreState {
  buttonState: boolean, 
  toggleButton: () => void
}
 
interface useLeftButtonState {
  leftButtonState: boolean, 
  setLeftButtonState: () => void
}

interface useRightButtonState {
  rightButtonState: boolean, 
  setRightButtonState: () => void
}

interface AmountState {
  number: number,
  incrementNum: () => void
  decrementNum: () => void
}

export const useStore = create<useStoreState>(set => ({
    buttonState: false,
    toggleButton: () => set(state => ({ buttonState: !state.buttonState }))
}))

export const useLeftButton = create<useLeftButtonState>(set => ({
    leftButtonState: false,
    setLeftButtonState: (newState) => set({ leftButtonState: newState }),
}))
  
export const useRightButton = create<useRightButtonState>(set => ({
  rightButtonState: false,
  setRightButtonState: (newState) => set({ rightButtonState: newState }),
}))

export const useAmountStore = create<AmountState>((set) => ({
  number: 0,
  incrementNum: () => set((state) => ({ number: state.number + 1 })),
  decrementNum: () => set((state) => ({ number: state.number > 0 ? state.number - 1 : state.number })),
}))