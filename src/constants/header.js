const menuInfo = {
  categoryItems: [
    {
      link: '/product_list?gender=LADIES',
      image: '/images/sidemenu/ladies.png',
      name: 'SHOP LADIES',
    },
    {
      link: '/product_list?gender=MENS',
      image: '/images/sidemenu/men.png',
      name: 'SHOP MENS',
    },
    {
      link: '/product_list?gender=KIDS',
      image: '/images/sidemenu/kids.png',
      name: 'SHOP KIDS',
    },
    {
      link: '/product_list',
      image: '/images/sidemenu/all.png',
      name: 'SHOP ALL',
    },
    {
      link: '/product_list?sort_by=newin&order=desc',
      image: '/images/sidemenu/new.png',
      name: 'NEW IN',
      role: ['user'],
    },
  ],
  
  linkItems: [
    {
      link: '/accounts',
      name: 'My Account'
    },
    {
      link: '/orders/list',
      name: 'Track Order'
    }
  ]
}

export { menuInfo }
