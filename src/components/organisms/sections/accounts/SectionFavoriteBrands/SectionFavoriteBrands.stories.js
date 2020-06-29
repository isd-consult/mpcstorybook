import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, select } from '@storybook/addon-knobs'

import SectionFavoriteBrands from './SectionFavoriteBrands'

storiesOf('Organisms/Sections/Accounts', module)
  .add('SectionFavoriteBrands', () => (
    <SectionFavoriteBrands
      theme={select('Theme', [null, 'men', 'women'])}
      className={text('Class', '')}
      title={text('Title', 'My Brands')}
      link={object('Link', link)}
      data={object('Data', data)}
    />
  ))

  const link = {
    href: '/',
    text: 'See all'
  }

  const data = [
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
  ]
