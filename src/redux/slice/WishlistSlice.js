import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:'wishlists',
    initialState: [],
    reducers:{
        addToWishlist:(state,actionFromView)=>{
            state.push(actionFromView.payload)
        },
        removeItem:(state,actionFromWishList)=>{
          return state.filter(item=>item.id!=actionFromWishList.payload)
        }
    }
})

export const {addToWishlist,removeItem} = wishlistSlice.actions
export default wishlistSlice.reducer