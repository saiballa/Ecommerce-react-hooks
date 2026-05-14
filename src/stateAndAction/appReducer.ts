import type { FormStateData,navigateSteps } from "../types/type";
 

export const initialState:FormStateData = {
    data:{
        userInfo:{
            name:null,
            email:null,
            phone:null,
        },
        address:{
            street:null,
            district:null,
            city:null,
            country:null,
        }
    },
    currentPage:null,
    navigate_Next_Page_status:false,
    navigate_Previous_Page_status:false,
    cartList:[],
    no_Of_Items:0,
}



export const formReducer = (state:FormStateData,action:navigateSteps)=>{
    switch (action.type) {
        case "update_Field": {
        if (state.currentPage === "/personalInfo"){
            return {
            ...state,
            data: {
                ...state.data,
                userInfo: {
                ...state.data.userInfo,
                [action.payload.fieldName]: action.payload.value
                }
            }
            };
        }

        if (state.currentPage === "/addressInfo"){
            return {
            ...state,
            data: {
                ...state.data,
                address: {
                ...state.data.address,
                [action.payload.fieldName]: action.payload.value
                }
            }
            };
        }

        return state;
        }
        

        case "current_step":
        return {
            ...state,currentPage:action.payload
        }

        case "add_Item":{
            let existingUser = state.cartList.find(item => item.id === action.payload.id);
            if(existingUser){
                return{
                ...state,no_Of_Items:state.no_Of_Items+1,cartList:state.cartList.map((item)=>{
                    if(item.id === action.payload.id){
                        return {...item,quantity:item.quantity+1}
                    }
                    return item;
                })
            }
            }
            let obj = {...action.payload,quantity:1}
            return{
            ...state,cartList:[...state.cartList,obj], no_Of_Items:state.no_Of_Items+1
            }
        }
        
        case "remove_item":{
            let existingItem = state.cartList.find(item => item.id === action.payload);
            return{
                ...state,cartList:state.cartList.filter(item => item.id !== action.payload),no_Of_Items:state.no_Of_Items - (existingItem ? existingItem.quantity : 0 )
            }
        }
            

        case "add_quantity":
            return{
                ...state,no_Of_Items:state.no_Of_Items+1,cartList:state.cartList.map((item)=>{
                    if(item.id === action.payload){
                        return {...item,quantity:item.quantity+1}
                    }
                    return item;
                })
            }

        case "remove_Qyantity": {
            const selectedItem = state.cartList.find(
                (item) => item.id === action.payload
            );

            return {
                ...state,

                no_Of_Items:
                selectedItem && selectedItem.quantity > 1
                    ? state.no_Of_Items - 1
                    : state.no_Of_Items,

                cartList: state.cartList.map((item) => {
                if (item.id === action.payload) {
                    return {
                    ...item,
                    quantity: item.quantity > 1
                        ? item.quantity - 1
                        : 1,
                    };
                }

                return item;
                }),
            };
            }

            case "clear_cart":
                return {...state,cartList:[],no_Of_Items:0}

        default:
            return state;
    }
}