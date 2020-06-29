 const sortList = [
    {
      label: 'Price Low To High',
      value: {
        label: 'price',
        order: 'asc',
      },
    },
    {
      label: 'Price High To Low',
      value: {
        label: 'price',
        order: 'desc',
      },
    },
    {
      label: 'Newest',
      value: {
        label: 'newin',
        order: 'desc',
      },
    }
  ]

  const priceList = [
    'Under R100',
    'R100 - R250',
    'R250 - R500',
    'R500 - R750',
    'R750 - R1,000',
    'R1,000 - R2,000',
    'Over R2,000'
  ]

export { sortList, priceList }