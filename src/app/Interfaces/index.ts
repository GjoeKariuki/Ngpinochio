export interface inewUser {
  

    username:string
    fullname: string
    email: string
    phonenumber: number
    upassword: string
    confirmpassword:string


}

  export  interface iProducts {
    PID:string
    PNAME:string
    PDESCRIPTION:string
    PIMAGE:string
    PQUANTITY:number
    PRICE:number
    PCATEGORY:string
    ISDELETED: number
}

export interface addIproduct {
    PNAME:string
    PDESCRIPTION:string
    PIMAGE:string
    PQUANTITY:number
    PRICE:number
    PCATEGORY:string
}
  
export interface AddProductSuccess {
  message:string
}

export interface iorders {
    ORDERID:string
    CID:string
    UID:string
    UEMAIL:string
    PNAME:string
    PDESCRIPTION:string
    PRICE:number
    PCOUNT:string
    ORDERDATE:string
    ORDERSTATUS:string  
    ISDELETED: number
}

export interface AddOrderSuccess {
  message: string
}

export interface iCart {
    CID:string
    PID:string
    UID:string
    PNAME:string
    PDESCRIPTION:string
    PRICE:number
    PCOUNT:number

}

export interface addIcart {
  email:string
}

export interface AddToCartSuccess {
  message:string
}


export interface AddUserSuccess{
  message:string
}


export interface iloginUser {
  email: string;
  upassword: string;
}

export interface logUserSuccess{
  message:string
  token:string
  role:string
  name:string
  email:string
  password: string;
  userName:string;
}



export interface updateUserSuccess{
  message:string
}

export interface dbusers {
  USERID: string
  USERNAME: string
  FULLNAME: string
  EMAIL: string
  PHONENUMBER: number
  UPASSWORD: string
  UROLE: string
  ISDELETED: number
  EMAILSENT: number
}
