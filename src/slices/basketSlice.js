import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  userCollection:[],
};





export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const data = action.payload;
      var quantity=1;
      var itemPresent=false;
      state.items.map((item)=>{
        if(data.id === item.id)
        {
          item.quantity += 1;
          itemPresent = true;
        }

      })
      
      if(!itemPresent)
        state.items= [...state.items,{ ...data,quantity: quantity}]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex((basketItem)=> basketItem.id == action.payload.id)
      var newBasket =[];
      newBasket = [...state.items];
      state.items[index].quantity--;

      if(index >=0 && state.items[index].quantity===0)
      {
        // id exists in basket 
        newBasket.splice(index,1)
        console.log(action.payload.id,"removed =============")
        state.items=newBasket;
      }
    
    
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal =(state)=>
  state.basket.items.reduce((total,item)=>total+item.price*item.quantity,0);

export default basketSlice.reducer;
