import { Injectable } from '@angular/core';
import { caraouslImages } from 'caraoselinterface';
import { Products } from 'interface';

@Injectable({
  providedIn: 'root'
})
export class EcommerceService {
  product: Products[] = [
    {
      id: '100',
      category: 'Electronics',
      productName: 'magma-mini',
      description: 'Mini 60% form factor frees up space on your desktop and 5-Zone AIMO RGB Lighting with translucent top plate',
      image: 'https://i.shgcdn.com/e20910ab-f171-4135-a9c7-112fe1f52290/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
      price: 2500,
    },
    {
      id: '200',
      category: 'Electronics',
      productName: 'KoneXP Air',
      description: 'Refined ergonomic KONE shape',
      image: 'https://i.shgcdn.com/01b7205f-6b32-482b-bc5a-2126a53d9b65/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
      price: 1500,
    },
    {
      id: '900',
      category: 'Electronics',
      productName: 'Burst Pro Air',
      description: 'Lightweight symmetrical shape for comfort and performance',
      image: 'https://cdn.shopify.com/s/files/1/0507/9688/8239/products/Burst-Pro-Air_BLK_550x534.png?v=1648471990',
      price: 1700,
    },
    {
      id: '530',
      category: 'Electronics',
      productName: 'magma-mini',
      description: 'Mini 60% form factor frees up space on your desktop and 5-Zone AIMO RGB Lighting with translucent top plate',
      image: 'https://i.shgcdn.com/e20910ab-f171-4135-a9c7-112fe1f52290/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
      price: 2500,
    },
    {
      id: '510',
      category: 'Electronics',
      productName: 'magma-mini',
      description: 'Mini 60% form factor frees up space on your desktop and 5-Zone AIMO RGB Lighting with translucent top plate',
      image: 'https://i.shgcdn.com/e20910ab-f171-4135-a9c7-112fe1f52290/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
      price: 2500,
    },
    {
      id: '550',
      category: 'Clothes',
      productName: 'magma-mini',
      description: 'Mini 60% form factor frees up space on your desktop and 5-Zone AIMO RGB Lighting with translucent top plate',
      image: 'https://i.shgcdn.com/e20910ab-f171-4135-a9c7-112fe1f52290/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
      price: 2500,
    },
    {
      id: '360',
      category: 'Clothes',
      productName: 'magma-mini',
      description: 'Mini 60% form factor frees up space on your desktop and 5-Zone AIMO RGB Lighting with translucent top plate',
      image: 'https://i.shgcdn.com/e20910ab-f171-4135-a9c7-112fe1f52290/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
      price: 2500,
    },
    {
      id: '300',
      category: 'Accesories',
      productName: 'magma-mini',
      description: 'Mini 60% form factor frees up space on your desktop and 5-Zone AIMO RGB Lighting with translucent top plate',
      image: 'https://i.shgcdn.com/e20910ab-f171-4135-a9c7-112fe1f52290/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
      price: 2500,
    },
    {
      id: '400',
      category: 'Shoes',
      productName: 'magma-mini',
      description: 'Mini 60% form factor frees up space on your desktop and 5-Zone AIMO RGB Lighting with translucent top plate',
      image: 'https://i.shgcdn.com/e20910ab-f171-4135-a9c7-112fe1f52290/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
      price: 2500,
    },
     {
      id: '500',
      category: 'Shoes',
      productName: 'magma-mini',
      description: 'Mini 60% form factor frees up space on your desktop and 5-Zone AIMO RGB Lighting with translucent top plate',
      image: 'https://i.shgcdn.com/e20910ab-f171-4135-a9c7-112fe1f52290/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
      price: 2500,
    },
     {
      id: '600',
      category: 'Electronics',
      productName: 'magma-mini',
      description: 'Mini 60% form factor frees up space on your desktop and 5-Zone AIMO RGB Lighting with translucent top plate',
      image: 'https://i.shgcdn.com/e20910ab-f171-4135-a9c7-112fe1f52290/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
      price: 2500,
    },
    {
      id: '700',
      category: 'Electronics',
      productName: 'magma-mini',
      description: 'Mini 60% form factor frees up space on your desktop and 5-Zone AIMO RGB Lighting with translucent top plate',
      image: 'https://i.shgcdn.com/e20910ab-f171-4135-a9c7-112fe1f52290/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
      price: 2500,
    }

  ]

  constructor() { }

  getCategories() {
    let categories: string[] = [];
    for (let product of this.product) {
      if (!categories.includes(product.category)) {
        categories.push(product.category);
      }
    }
    return categories;
  }

  getProducts(): Products[] {
    return this.product;
  }

  getProductinCategory(category: string) {
    const products = this.product.filter(x => {
      return x.category === category;
    });
    return products;
  }

  getProductById(id:string){
 return  this.product.find(x=>x.id===id) as Products
  
  }

  cartItems: Products[] = [];
  addToCart(product: Products): void {
    this.cartItems.push(product);
  }

  getCartItems(): Products[] {
    return this.cartItems;
  }




  image: caraouslImages[] =  [{
    imageSrc: 'https://www.shutterstock.com/image-photo/full-length-stylish-multicultural-women-260nw-1855048690.jpg',
    imageAlt:'no imgae',
  },
   {
    imageSrc: 'data:image/jpeg;base64,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',
    imageAlt:'no image',
  },
 {
    imageSrc: 'https://cdn.vectorstock.com/i/preview-1x/99/44/portable-electronics-isometric-background-vector-42859944.jpg',
    imageAlt:'no image',
  }
]

getImages():caraouslImages[]{
  return this.image
}

}
