const brandCategories = [
  {
    label: "A - C",
    value: "A+B+C"
  },
  {
    label: "D - F",
    value: "D+E+F"
  },
  {
    label: "G - K",
    value: "G+H+I+J+K"
  },
  {
    label: "L - N",
    value: "L+M+N"
  },
  {
    label: "O - R",
    value: "O+P+Q+R"
  },
  {
    label: "S - T",
    value: "S+T"
  },
  {
    label: "U - Z",
    value: "U+V+W+X+Y+Z"
  }
]

const accountMenuInfo = [
  {
    href: "/accounts/info",
    label: "Account info",
    lefticon: "settings",
    righticon: "arrow-small"
  },
  {
    href: "/credit/fbucks",
    label: "My Credits",
    lefticon: "credit-card",
    righticon: "arrow-small"
  },
  {
    href: "/orders/list",
    label: "My Orders",
    lefticon: "truck",
    righticon: "arrow-small"
  },
  {
    href: "/returns/list",
    label: "My Returns",
    lefticon: "returns",
    righticon: "arrow-small"
  },
  {
    href: "/accounts/preferences",
    label: "My Communication",
    lefticon: "heart-bone",
    righticon: "arrow-small"
  },
  // {
  //   href: "/accounts/wishlist",
  //   label: "My Wishlist",
  //   lefticon: "heart-bone",
  //   righticon: "arrow-small"
  // }
]

const closetLandingInfo = {
  brands: [
    {
      name: 'Guess',
      image: {
        src: "https://rws-portal-global.s3.eu-west-1.amazonaws.com/"
          +"Brands/62775f661d1adaf0ca3a486b357601ec.png",
        title: "guess"
      }
    },
    {
      name: 'Soviet',
      image: {
        src: "https://rws-portal-global.s3.eu-west-1.amazonaws.com/"
        +"Brands/050684f0905a0b9371e3f8ff912c2573.png",
        title: "soviet"
      }
    },
    {
      name: 'Revlon',
      image: {
        src: "https://rws-portal-global.s3.eu-west-1.amazonaws.com/"
        +"Brands/3155d3b759d614a0fb8bdc8952227c0f.png",
        title: "Revlon"
      }
    },
    {
      name: 'Puma',
      image: {
        src: "https://rws-portal-global.s3.eu-west-1.amazonaws.com/"
        +"Brands/4440e0e89259f64c724fd7f9c2871275.png",
        title: "Puma"
      }
    }
  ],
  sizes: {
    "Shoes": ["6"],
    "Tops": ["10", "M", "38"]
  },
  categories: {
    "My Categories": ["Accessories", "Swimwear", "Bottoms"]
  },
  preferences: {
    "I like to get": ["Email"]
  }
}

const sizesOptions = {
  "Shoes": [
    {
      "id": 1,
      "type": "text",
      "value": "3",
      "label": "3",
      "image": null
    },
    {
      "id": 2,
      "type": "text",
      "value": "4",
      "label": "4",
      "image": null
    },
    {
      "id": 4,
      "type": "text",
      "value": "5",
      "label": "5",
      "image": null
    },
    {
      "id": 5,
      "type": "text",
      "value": "6",
      "label": "6",
      "image": null
    },
    {
      "id": 6,
      "type": "text",
      "value": "7",
      "label": "7",
      "image": null
    },
    {
      "id": 8,
      "type": "text",
      "value": "8",
      "label": "8",
      "image": null
    }
  ],
  "Tops": [
    {
      "id": 1,
      "type": "text",
      "value": "XXS",
      "label": "XXS",
      "image": null
    },
    {
      "id": 2,
      "type": "text",
      "value": "XS",
      "label": "XS",
      "image": null
    },
    {
      "id": 4,
      "type": "text",
      "value": "S",
      "label": "S",
      "image": null
    },
    {
      "id": 5,
      "type": "text",
      "value": "M",
      "label": "M",
      "image": null
    },
    {
      "id": 6,
      "type": "text",
      "value": "L",
      "label": "L",
      "image": null
    },
    {
      "id": 8,
      "type": "text",
      "value": "XL",
      "label": "XL",
      "image": null
    },
    {
      "id": 9,
      "type": "text",
      "value": "XXL",
      "label": "XXL",
      "image": null
    }
  ],
  "Bottoms": [
    {
      "id": 1,
      "type": "text",
      "value": "XXS",
      "label": "XXS",
      "image": null
    },
    {
      "id": 2,
      "type": "text",
      "value": "XS",
      "label": "XS",
      "image": null
    },
    {
      "id": 4,
      "type": "text",
      "value": "S",
      "label": "S",
      "image": null
    },
    {
      "id": 5,
      "type": "text",
      "value": "M",
      "label": "M",
      "image": null
    },
    {
      "id": 6,
      "type": "text",
      "value": "L",
      "label": "L",
      "image": null
    },
    {
      "id": 8,
      "type": "text",
      "value": "XL",
      "label": "XL",
      "image": null
    },
    {
      "id": 9,
      "type": "text",
      "value": "XXL",
      "label": "XXL",
      "image": null
    }
  ]
}
export { brandCategories, accountMenuInfo, closetLandingInfo, sizesOptions }