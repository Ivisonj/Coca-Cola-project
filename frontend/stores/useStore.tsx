import { create } from 'zustand'

interface useAddProductButtonState {
  addProductButtonState: boolean, 
  setAddProductButtonState: () => void
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

interface CurrentProductState {
  currentProduct: string | null
  setCurrentProduct: () => void
}

interface CurrentProducteIndexState {
  currentProductIndex: string | null
  setCurrentProductIndex: () => void
}

export const useAddProductButton = create<useAddProductButtonState>(set => ({
    addProductButtonState: false,
    setAddProductButtonState: (newState: boolean) => set(state => ({
       addProductButtonState: newState }))
}))

export const useLeftButton = create<useLeftButtonState>(set => ({
    leftButtonState: false,
    setLeftButtonState: (newState) => set({ leftButtonState: newState }),
}))
  
export const useRightButton = create<useRightButtonState>(set => ({
  rightButtonState: false,
  setRightButtonState: (newState) => set({ rightButtonState: newState }),
}))

export const useAmountStore = create<AmountState>(set => ({
  number: 0,
  incrementNum: () => set((state) => ({ number: state.number + 1 })),
  decrementNum: () => set((state) => ({ number: state.number > 0 ? state.number - 1 : state.number })),
}))

export const useCurrentProduct = create<CurrentProductState>(set => ({
  currentProduct: null,
  setCurrentProduct: (newProduct) => set((state) => ({ currentProduct: newProduct })),
}))

export const useCurrrentProductIndex = create<CurrentProducteIndexState>(set => ({
  currentProductIndex: null,
  setCurrentProductIndex: (newIndex) => set((state) => ({ currentProductIndex: newIndex}))
}))