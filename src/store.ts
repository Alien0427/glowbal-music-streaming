import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ArtistState {
  artist_id: number | null;
}

const initialState: ArtistState = {
  artist_id: null,
};

const artistSlice = createSlice({
  name: 'artist',
  initialState,
  reducers: {
    setArtistId(state, action: PayloadAction<number>) {
      state.artist_id = action.payload;
    },
  },
});

export const { setArtistId } = artistSlice.actions;

const store = configureStore({
  reducer: {
    artist: artistSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;