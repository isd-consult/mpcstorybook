const returns = [
    {
      returnId: '100038590',
      returnDate: '09/03/2019',
      orderId: '#190823001071',
      orderDate: 'Aug 3 2019',
      price: 'R389.60',
      status: 'Pending Approval'
    },
    {
      returnId: '100038590',
      returnDate: '09/03/2019',
      orderId: '#190823001071',
      orderDate: 'Aug 3 2019',
      price: 'R389.60',
      status: 'Pending Approval'
    }
]

const orders = [{
  orderId: '19080600589685',
  orderDate: '08/26/2019',
  description: 'items can be returned during next 9 days',
  totalPrice: 'R618.60',
  status: 'Delievered',
  products: 
  [
    {
      productId: '111',
      name: 'Mens Navy Winter',
      imageUrl: 'https://cdn-static.runwaysale.co.za' 
          + '/media/catalog/product/h/u/huda2navy.jpg',
      brand: 'Warmer Scarf',
      price: 'R169.00',
      qty: '1'
    },
    { 
      productId: '222',
      name: 'Ladies Navy',
      imageUrl: 'https://cdn-static.runwaysale.co.za' 
          + '/media/catalog/product/h/u/huda2navy.jpg',
      brand: 'Neck Blouse',
      price: 'R99.00',
      qty: '2'
    }
  ]
}
,
{
  orderId: '19080600589685',
  orderDate: '08/23/2019',
  description: 'items can be returned during next 6 days',
  totalPrice: 'R389.60',
  status: 'Awaiting Courier Collection',
  products: 
  [
    {
      productId: '111',
      name: 'Mens Navy Winter',
      imageUrl: 'https://cdn-static.runwaysale.co.za' 
          + '/media/catalog/product/h/u/huda2navy.jpg',
      brand: 'Warmer Scarf',
      price: 'R169.00',
      qty: '1'
    },
    { 
      productId: '222',
      name: 'Ladies Navy',
      imageUrl: 'https://cdn-static.runwaysale.co.za' 
          + '/media/catalog/product/h/u/huda2navy.jpg',
      brand: 'Neck Blouse',
      price: 'R99.00',
      qty: '2'
    }
  ]
}]

const reasons= [
  {
    label: "Too big", 
    value: "too_big"
  },
  {
    label: "Too small", 
    value: "too_small"
  },
  {
    label: "I selected the wrong size", 
    value: "selected_wrong_size"
  },
  {
    label: "I don't like it", 
    value: "do_not_like_it"
  },
  {
    label: "I am not happy with the quality", 
    value: "not_happy_with_qty"
  },
  {
    label: "I received the wrong size/item", 
    value: "received_wrong_size_item"
  },
  {
    label: "I received the item damaged", 
    value: "received_item_damaged"
  }
]

const deliveryMethods = [
  {
    label: "Hand delivery",
    value: "hand_delivery"
  },
  {
    label: "Courier or Post Office",
    value: "courier_or_post_office"
  },
  {
    label: "RunwaySale to Collect",
    value: "runwaysale_to_collect"
  },
]

const refundMethods = [
  {
    label: "Store Credit", 
    value: "store_credit"
  },
  {
    label: "Credit Card / EFT", 
    value: "credit_card_eft"
  },
]

export { 
  returns, 
  orders, 
  reasons, 
  deliveryMethods, 
  refundMethods 
}