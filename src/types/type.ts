export interface PersonalInfo{
    name:string | null;
    email:string | null;
    phone:string | null;
}

export interface AddressInfo{
    street:string | null;
    district:string | null;
    city:string | null;
    country:string | null;
}

export interface FetchDataState{
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
    }
}

export interface CartListData{
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
    },
    quantity:number;
}

type UserInfoFields = "name" | "email" | "phone";
type AddressFields = "street" | "district" | "city" | "country";

type ActionPayload =
  | { fieldName: UserInfoFields; value: string }
  | { fieldName: AddressFields; value: string };

type logginUserType = {
    name:string;
    email:string;
}

type logoutUser = {
    logoutStatus:boolean;
    navigateUser:null
}

export type navigateSteps = {type:"update_Field",payload:ActionPayload} | {type:"current_step",payload:string} | {type:"add_Item",payload:FetchDataState} | {type:"remove_item",payload:number} | {type:"add_quantity",payload:number} | {type:"remove_Qyantity",payload:number} | {type:"clear_cart"} | {type:"set_Auth",payload:string} | {type:"set_logginUser",payload:logginUserType} |{type:"logOut",payload:logoutUser} | {type:"clear_data",payload:null};

export interface FormStateData{
    authState:{
        isLoggedIn:boolean;
        navigateHome:string | null;
    },
    data:{
        userInfo:PersonalInfo,
        address:AddressInfo
    },
    currentPage:string | null,
    cartList:CartListData[],
    no_Of_Items:number,
}
