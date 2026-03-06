import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMenuById =createAsyncThunk(
    "menu/fetchMenuById",
    async(id,{rejectWithValue})=>{
    try {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
    const response = await fetch(proxy + swiggyAPI);
    const data = await response.json();

    const header = data?.data?.cards[2]?.card?.card?.info;
    const offers = data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers;
    const sections = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    const filteredMenu = sections?.filter(
    (item) => "title" in item?.card?.card && !item?.card?.card[1]
    );

    return {
    id,
    headerData: header,
    offers,
    menuData: filteredMenu,
    };
    } catch (err) {
    return rejectWithValue(err.message);
    }
  }
);

const menuSlice=createSlice({
    name:"menu",
    initialState:{
        items:{},
        status:"idle",
        error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchMenuById.pending,(state)=>{
            state.status="loading";
        })
        .addCase(fetchMenuById.fulfilled,(state,action)=>{
            const {id,headerData,offers,menuData}=action.payload;
        /*state.items["123"] = {
        headerData: { name: "Domino's", rating: 4.5 },
        offers: ["40% off", "Free delivery"],
        menuData: [...]
        }
        So state.items ends up like this:
        js
        {
        123: {
        headerData: {...},
        offers: [...],
        menuData: [...]
        },
        456: {...},
        789: {...}
        }
        Each restaurant ID gets its own entry in the global Redux shelf.*/
        state.items[id] = { headerData, offers, menuData };
        state.status = "succeeded";
      })
      .addCase(fetchMenuById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
    }
})
export default menuSlice.reducer;