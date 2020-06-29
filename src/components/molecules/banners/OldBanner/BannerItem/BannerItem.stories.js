import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, object } from '@storybook/addon-knobs'
import BannerItem from './BannerItem'

storiesOf('Molecules/Banner', module)
  .add('BannerItem', () => (
    <BannerItem
      theme={select('Theme', [null, 'men', 'women'])}
      status={select('Status', [null, 'previous', 'active', 'after'], 'active')}
      title={text('Title', 'Spring Collection')}
      heading={text('Heading', 'Hot Sale!')}
      subheading={text('Subheading', 'Shop bestsellers on sale in your size')}
      backgroundImage={text(
        'Background image', 'https://loremflickr.com/320/240/dog'
      )}
      buttons={object('Buttons', buttons)}
      className={text('Class', '')}
      url={text('URL', 'http://storybook-dev.mpc.runway.co.za/product_list')}
    />
  ))
  
  const buttons = [
    {
      colour: 'red',
      text: 'Shop Shoes',
      url: '/shop/shoes',
    },
    {
      colour: 'blue',
      text: 'Shop Dresses',
      url: '/shop/shoes',
    },
  ]