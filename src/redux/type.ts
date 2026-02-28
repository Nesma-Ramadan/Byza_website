

export type productsType = {  
id: number,
title: string,
price: number,
description: string,
category: string,
image: string,
rating: {
rate: number,
count: number
}
}

export type CartItemType = productsType & { quantity: number }


export interface AllProductStateType {
  allproduct: productsType[]
  isLoading: boolean
  error: string | null
}



     
