export interface newUser {
  
    userName:string;
    fullName: string;
    email: string;
    phoneNumber: number;
    password: string;

  }

  export  interface iProducts {
    PID:string
    PNAME:string
    PDESCRIPTION:string
    PIMAGE:string
    PRICE:number
    ISDELETED: number
}

  
  export interface iorders {
    ORDERID:string
    PID:string
    PNAME:string
    PCOUNT:string
    PRICE:number
    ISDELETED: number
    orderStatus:string
}

export interface iCart {
    PID:string
    CARTID:string
    PNAME:string
    PDESCRIPTION:string
    PRICE:number
    PCOUNT:number
}


export interface AddUserSuccess{
    message:string
}

export interface loginUser {
  email: string;
  password: string;
  userName:string;
}

export interface logUserSuccess{
  token:string;
  roles:string;
  userName:string;
}

