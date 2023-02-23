// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchGames = createAsyncThunk(
//     "games/fetchGames",
//     async (_, { rejectWithValue }) => {
//         try {
//             const response = await fetch(
//                 "https://gamerpower.p.rapidapi.com/api/giveaways",
//                 {
//                     method: "GET",
//                     headers: {
//                         "X-RapidAPI-Key": "77eca41c4amsh7468f3f675936f6p17f94bjsnd0515102dbe1",
//                         "X-RapidAPI-Host": "gamerpower.p.rapidapi.com",
//                     },
//                 }

//             );
//             if (!response.ok) {
//                 throw new Error("Data could not be fetched!");
//             } else {
//                 return response.json();
//             }
//         } catch (e) {
//             return rejectWithValue(e.message);
//         }
//     }
// );

// const initialState = {
//     gamesList: [],
//     status: "idle",
//     error: null,
//     selectedPlatforms: [],
// };

// const gamesSlice = createSlice({
//     name: "games",
//     initialState,
//     reducers: {
//         setSelectedPlatforms: (state, action) => {
//             state.selectedPlatforms = action.payload;
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchGames.pending, (state) => {
//                 state.status = "loading";
//             })
//             .addCase(fetchGames.fulfilled, (state, action) => {
//                 const filteredGames = action.payload.filter(
//                     (game) =>
//                         game.worth !== "N/A" &&
//                         state.selectedPlatforms.some((platform) =>
//                             game.platforms.includes(platform)
//                         )
//                 );
//                 state.gamesList = filteredGames;
//                 state.status = "succeeded";
//             })
//             .addCase(fetchGames.rejected, (state, action) => {
//                 state.status = "failed";
//                 state.error = action.payload;
//             });
//     },
// });

// export const gamesActions = gamesSlice.actions;

// export default gamesSlice;
