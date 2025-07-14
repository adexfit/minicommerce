"use client";

import { StaticImageData } from "next/image";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image?: StaticImageData | string; // Allow both StaticImageData and string for image
};

type CartState = {
    items: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
    increment: (id: string) => void;
    decrement: (id: string) => void;
    getTotalPrice: () => number;
};

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],

            addToCart: (item) => {
                const existingItem = get().items.find((i) => i.id === item.id);
                if (existingItem) {
                    set({
                        items: get().items.map((i) =>
                            i.id === item.id
                                ? { ...i, quantity: i.quantity + item.quantity }
                                : i
                        ),
                    });
                } else {
                    set({ items: [...get().items, item] });
                }
            },

            removeFromCart: (id) => {
                set({ items: get().items.filter((item) => item.id !== id) });
            },

            clearCart: () => {
                set({ items: [] });
            },

            increment: (id) => {
                set({
                    items: get().items.map((item) =>
                        item.id === id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                });
            },

            decrement: (id) => {
                set({
                    items: get()
                        .items.map((item) =>
                            item.id === id
                                ? { ...item, quantity: item.quantity - 1 }
                                : item
                        )
                        .filter((item) => item.quantity > 0),
                });
            },
            getTotalPrice: () => {
                return get().items.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                );
            },
        }),
        {
            name: "cart-storage",
            storage:
                typeof window !== "undefined"
                    ? {
                          getItem: (name) => {
                              const value = localStorage.getItem(name);
                              return value ? JSON.parse(value) : null;
                          },
                          setItem: (name, value) => {
                              localStorage.setItem(name, JSON.stringify(value));
                          },
                          removeItem: (name) => {
                              localStorage.removeItem(name);
                          },
                      }
                    : undefined,
        }
    )
);
