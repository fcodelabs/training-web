import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../user/userSlice'
import cardSlice from '../card/cardSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    cards: cardSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch