  // ============================================================
  // Last chance
  // ============================================================
  const lastChanceLink = {
    href: '/all_bestsellers',
    text: 'Shop all Last Chance',
  }

  // ============================================================
  // Price
  // ============================================================
  const priceOptions = [
    { value: '200', label: 'R200' },
    { value: '400', label: 'R400' },
    { value: '800', label: 'R800' },
    { value: '1000', label: 'R1000' },
  ]

  // ============================================================
  // New in
  // ============================================================
  const newInLink = {
    href: '/product-list?sort_by=newin&order=desc',
    text: 'See all'
  }

  // ============================================================
  // Brands
  // ============================================================
  const brandsLink = {
    href: '/edit_brand',
    text: 'Edit your Brands',
  }

  // ============================================================
  // Messages
  // ============================================================
  const messages = [
    {
      "heading": "Test SQS Order Popup Header",
      "message_id": 2,
      "message": "Test SQS Order Popup Message",
      "seen": 0
    },
    {
      "heading": "Order Updates",
      "message_id": "somemdr52",
      "message": "Your order for 12th is ready",
      "seen": 0
    },
    {
      "heading": "Order Updates",
      "message_id": "somemdr53",
      "message": "Your order for 12th is ready",
      "seen": 0
    },
    {
      "heading": "Order Updates",
      "message_id": "somemdr54",
      "message": "Your order for 12th is ready",
      "seen": 0
    }
  ]

  // ============================================================
  // Scroll Position of Blocks
  // ============================================================
  const scrollPos = {
    newin: 600,
    shopbycategory: 800
  }

  export {
    lastChanceLink,
    newInLink,
    brandsLink,
    priceOptions,
    messages,
    scrollPos
  }
