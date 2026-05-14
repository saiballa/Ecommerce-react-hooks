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

export type navigateSteps = {type:"update_Field",payload:ActionPayload} | {type:"current_step",payload:string} | {type:"add_Item",payload:FetchDataState} | {type:"remove_item",payload:number} | {type:"add_quantity",payload:number} | {type:"remove_Qyantity",payload:number} | {type:"clear_cart"};

export interface FormStateData{
    data:{
        userInfo:PersonalInfo,
        address:AddressInfo
    },
    currentPage:string | null,
    navigate_Previous_Page_status:boolean,
    navigate_Next_Page_status:boolean,
    cartList:CartListData[],
    no_Of_Items:number,
}

