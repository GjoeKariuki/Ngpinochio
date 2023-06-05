// import { Injectable } from '@angular/core';
// import { caraouslImages } from 'caraoselinterface';
// import { Products, newproduct } from 'interface';
// import { products } from './productsholder';

// @Injectable({
//   providedIn: 'root'
// })
// export class EcommerceService {
//   product: Products[] = [
//     {
//       id: '100',
//       category: 'Electronics',
//       productName: 'magma-mini',
//       description: 'Mini 60% form factor frees up space on your desktop and 5-Zone AIMO RGB Lighting with translucent top plate',
//       image: 'https://i.shgcdn.com/e20910ab-f171-4135-a9c7-112fe1f52290/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
//       price: 2500,
//       quantity:23
//     },
//     {
//       id: '200',
//       category: 'Electronics',
//       productName: 'KoneXP Air',
//       description: 'Refined ergonomic KONE shape',
//       image: 'https://i.shgcdn.com/01b7205f-6b32-482b-bc5a-2126a53d9b65/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
//       price: 1500,
//       quantity:54
//     },
//     {
//       id: '900',
//       category: 'Electronics',
//       productName: 'Burst Pro Air',
//       description: 'Lightweight symmetrical shape for comfort and performance',
//       image: 'https://cdn.shopify.com/s/files/1/0507/9688/8239/products/Burst-Pro-Air_BLK_550x534.png?v=1648471990',
//       price: 1700,
//       quantity:78
//     },
//     {
//       id: '530',
//       category: 'Electronics',
//       productName: 'magma-mini',
//       description: 'Mini 60% form factor frees up space on your desktop and 5-Zone AIMO RGB Lighting with translucent top plate',
//       image: 'https://i.shgcdn.com/e20910ab-f171-4135-a9c7-112fe1f52290/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
//       price: 2500,
//       quantity:890
//     },
//     {
//       id: '510',
//       category: 'Electronics',
//       productName: 'magma-mini',
//       description: 'Mini 60% form factor frees up space on your desktop and 5-Zone AIMO RGB Lighting with translucent top plate',
//       image: 'https://i.shgcdn.com/e20910ab-f171-4135-a9c7-112fe1f52290/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
//       price: 2500,
//       quantity:453
//     },
//     {
//       id: '550',
//       category: 'Clothes',
//       productName: 'magma-mini',
//       description: 'Mini 60% form factor frees up space on your desktop and 5-Zone AIMO RGB Lighting with translucent top plate',
//       image: 'https://i.shgcdn.com/e20910ab-f171-4135-a9c7-112fe1f52290/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
//       price: 2500,
//       quantity:12
//     },
//     {
//       id: '360',
//       category: 'Clothes',
//       productName: 'magma-mini',
//       description: 'Mini 60% form factor frees up space on your desktop and 5-Zone AIMO RGB Lighting with translucent top plate',
//       image: 'https://i.shgcdn.com/e20910ab-f171-4135-a9c7-112fe1f52290/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
//       price: 2500,
//       quantity:67
//     },
//     {
//       id: '300',
//       category: 'Accesories',
//       productName: 'magma-mini',
//       description: 'Mini 60% form factor frees up space on your desktop and 5-Zone AIMO RGB Lighting with translucent top plate',
//       image: 'https://i.shgcdn.com/e20910ab-f171-4135-a9c7-112fe1f52290/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
//       price: 2500,
//       quantity:768
//     },
//     {
//       id: '400',
//       category: 'Shoes',
//       productName: 'magma-mini',
//       description: 'Mini 60% form factor frees up space on your desktop and 5-Zone AIMO RGB Lighting with translucent top plate',
//       image: 'https://i.shgcdn.com/e20910ab-f171-4135-a9c7-112fe1f52290/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
//       price: 2500,
//       quantity:445
//     },
//      {
//       id: '500',
//       category: 'Shoes',
//       productName: 'magma-mini',
//       description: 'Mini 60% form factor frees up space on your desktop and 5-Zone AIMO RGB Lighting with translucent top plate',
//       image: 'https://i.shgcdn.com/e20910ab-f171-4135-a9c7-112fe1f52290/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
//       price: 2500,
//       quantity:232
//     },
//      {
//       id: '600',
//       category: 'Electronics',
//       productName: 'magma-mini',
//       description: 'Mini 60% form factor frees up space on your desktop and 5-Zone AIMO RGB Lighting with translucent top plate',
//       image: 'https://i.shgcdn.com/e20910ab-f171-4135-a9c7-112fe1f52290/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
//       price: 2500,
//       quantity:239
//     },
//     {
//       id: '700',
//       category: 'Electronics',
//       productName: 'magma-mini',
//       description: 'Mini 60% form factor frees up space on your desktop and 5-Zone AIMO RGB Lighting with translucent top plate',
//       image: 'https://i.shgcdn.com/e20910ab-f171-4135-a9c7-112fe1f52290/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
//       price: 2500,
//       quantity:231
//     }

//   ]


//   constructor() { }

//   getCategories() {
//     let categories: string[] = [];
//     for (let product of this.product) {
//       if (!categories.includes(product.category)) {
//         categories.push(product.category);
//       }
//     }
//     return categories;
//   }

//   getProducts(): Products[] {
//     return this.product;
//   }

//   getProductinCategory(category: string) {
//     const products = this.product.filter(x => {
//       return x.category === category;
//     });
//     return products;
//   }

//   getProductById(id:string){
//  return  this.product.find(x=>x.id===id) as Products
  
//   }

//   // cartItems: Products[] = [];
//   // addToCart(product: Products): void {
//   //   this.cartItems.push(product);
//   // }

//   // getCartItems(): Products[] {
//   //   return this.cartItems;
//   // }

//   // add new product
 
//   addnewproduct(newprod:newproduct):void{
//     this.product.push(newprod)
//   }

//   // get all products
//   getallProducts():newproduct[]{
//     return this.product
//   }

//   getproductByName(vallew:string): newproduct[]{
//     const resalt = this.product.filter(x => x.productName.includes(vallew))!
//     return resalt
//   }

//   //
//   getproductsByPrice(vallew:number): newproduct[]{
//     const resalting = this.product.filter(x=> x.price < vallew)
//     return resalting
//   }

//   updateProduct(vallew:newproduct){
//     Object.assign(this.product.find(x=>x.id === vallew.id) as Products, vallew)
//     return this.product
//   }

//   // delete a product
//   deleteProduct(vallew:newproduct){
//     const index = this.product.findIndex(x=>x.id===vallew.id)
//     this.product.splice(index,1)
//   }



// }