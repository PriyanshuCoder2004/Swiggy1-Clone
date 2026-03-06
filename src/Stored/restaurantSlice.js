import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 🔄 Thunk with safe access and debugging
export const fetchRestaurants = createAsyncThunk(
  "restaurants/fetchList",
  async (_, { rejectWithValue }) => {
    try {
      const proxy = "https://cors-anywhere.herokuapp.com/";
      const url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
      const res = await fetch(proxy + url);

      if (!res.ok) throw new Error("Network response was not ok");

      const json = await res.json();

      //  Debug output
    //   console.log("Full API response:", json.data.cards);

      //  Safe access using .find() to locate restaurant card
      const restaurantCard = json?.data?.cards?.find(
        card => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );

      const restaurants = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      //  Highlights access with safe fallback
      const highlights = json?.data?.cards?.find(
        card => card?.card?.card?.imageGridCards?.info
      )?.card?.card?.imageGridCards?.info || [];

      return { restaurants, highlights };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: {
    list: [],
    list2: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload.restaurants || [];
        state.list2 = action.payload.highlights || [];
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  }
});

export default restaurantSlice.reducer;