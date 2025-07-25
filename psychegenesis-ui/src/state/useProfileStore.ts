// src/state/useProfileStore.ts
import { create } from 'zustand'

export const useProfileStore = create(set => ({
  answers: {},
  setAnswer: (key, value) => set(state => ({
    answers: { ...state.answers, [key]: value }
  })),
}))
