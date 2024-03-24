/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ItemTypes } from '@/types/item';
import { create } from 'zustand'

export type ItemStoreTypes = {
    items: ItemTypes[],
    totalPrice: number,
    setItems: (items: ItemTypes[]) => void,
    removeItem: (id: number) => void,
    changeQuantityItem: (item: ItemTypes, quantity: string) => void,
    calculateTotalPrice: () => void
}

type StateTypes = {
    items: ItemTypes[],
    totalPrice: number
}

const useItemsStore = create((set) => ({
    items: [] as ItemTypes[],
    totalPrice: 0,

    setItems: (items: ItemTypes[]) => set({ items }),

    removeItem: (id: number) => set((state: StateTypes) => {
        return {
            items: state.items.filter((item: ItemTypes) => item.id !== id)
        }
    }),

    changeQuantityItem: (item: ItemTypes, quantity: string) => set((state: StateTypes) => {
        const items = state.items.map((stateItem: ItemTypes) => {
            if (stateItem.id === item.id) {
                return {
                    ...stateItem,
                    quantity
                }
            }

            return stateItem;
        })

        return {
            items
        }
    }),

    calculateTotalPrice: () => {
        return set((state: StateTypes) => {
            const totalPrice = state.items.reduce((acc: number, item: ItemTypes) => {
                return acc + (item.price.value * parseInt(item.quantity));
            }, 0)

            return {
                totalPrice
            }
        })
    }
}));

export default useItemsStore;