import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPlantByIdAPI, fetchPlantsAPI } from '../services/plantApi';

export const fetchPlants = createAsyncThunk(
    'plants/fetchPlants',
    async () => {
        return await fetchPlantsAPI();
    }
);

export const fetchPlantById = createAsyncThunk(
    'plants/fetchPlantById',
    async (id) => {
        return await fetchPlantByIdAPI(id);
    }
);
const plantSlice = createSlice({
    name: 'plants',
    initialState: {
        plants: [],
        currentPlant: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPlants.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPlants.fulfilled, (state, action) => {
                state.loading = false;
                state.plants = action.payload;
            })
            .addCase(fetchPlants.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchPlantById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPlantById.fulfilled, (state, action) => {
                state.loading = false;
                state.currentPlant = action.payload;
            })
            .addCase(fetchPlantById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default plantSlice.reducer;