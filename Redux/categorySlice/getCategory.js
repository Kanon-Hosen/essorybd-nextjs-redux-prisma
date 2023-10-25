const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


const fetchCategory = createAsyncThunk("category/getCategory", async () => {
    const response = await fetch("http://localhost:3000/api/category");
    const data = await response.json();
    return data;
})

export const getCategory = createSlice({
    name: "category",
    initialState: {
        categories: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategory.pending, (state) => {
            state.loading = true;
        }),
            builder.addCase(fetchCategory.fulfilled, (state, action) => { 
                state.loading = false;
                state.categories = action.payload;
            })
    }
})