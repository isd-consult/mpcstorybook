const ordersList = [
  {
      orderNumber: "#123456789",
      orderItems: [
        {
          simpleSku: "simple_sku1",
          name: "Black Spunk Boot",
          brandName: "",
          sizeName: "XXL",
          imageUrl: 'https://s3-eu-west-1.amazonaws.com/'+
          'rws-portal-global/Images/PLU_PL506196_BLACK/'+
          'PLU_PL506196_BLACK|0.jpg',
          qty: 1,
          totalCost: 'R45.00'
        },
        {
          simpleSku: "simple_sku1",
          name: "Ladies Peacoat Ignite Netfit 2",
          brandName: "",
          sizeName: "XXL",
          imageUrl: 'https://cdn-static.runwaysale.co.za/'+
          'media/catalog/product/1/9/190982_03_1_1.jpg',
          qty: 2,
          totalCost: 'R106.00'
        }
      ],
      deliveryAddress: 'RunwaySale, 405 Tollgate'+
      'Industrial Building, 12 Ravenscraig Road, '+
      'Woodstock, Cape Town, 7925',
      deliveryCost: null,
      paymentMethod: null,
      status: {
        value: "1-3 Working Days",
        label: "From payment received"
      },
      createdAt: "2019-09-15"
  },
  {
      orderNumber: "#123456789",
      orderItems: [
        {
          simpleSku: "simple_sku1",
          name: "Black Spunk Boot",
          brandName: "",
          sizeName: "XXL",
          imageUrl: 'https://s3-eu-west-1.amazonaws.com/'+
          'rws-portal-global/Images/PLU_PL506196_BLACK/'+
          'PLU_PL506196_BLACK|0.jpg',
          qty: 1,
          totalCost: 'R45.00'
        },
        {
          simpleSku: "simple_sku1",
          name: "Ladies Peacoat Ignite Netfit 2",
          brandName: "",
          sizeName: "XXL",
          imageUrl: 'https://cdn-static.runwaysale.co.za/'+
          'media/catalog/product/1/9/190982_03_1_1.jpg',
          qty: 2,
          totalCost: 'R106.00'
        }
      ],
      deliveryAddress: null,
      deliveryCost: null,
      paymentMethod: null,
      status: {
        value: "1-3 Working Days",
        label: "From payment received"
      },
      createdAt: "2019-09-15"
    }
]

export { ordersList }