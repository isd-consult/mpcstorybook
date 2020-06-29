/* eslint-disable max-len */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object } from '@storybook/addon-knobs'

import MainBanner from './MainBanner'

storiesOf('Molecules/Banners', module).add('MainBanner', () => (
  <MainBanner
    items={object('Items', [
      {
        subheading: 'Its t-shirt weather so shop summer staples',
        active: 1.0,
        buttons: [
          {
            colour: null,
            url:
              'https://storybook-stage.mpc.runway.co.za/product_list?gender=MENS',
            text: 'Shop t-shirts & vest',
          },
          {
            colour: null,
            url:
              'https://storybook-stage.mpc.runway.co.za/product_list?gender=MENS',
            text: 'New',
          },
        ],
        end_date: '2020-02-21 00:00:00',
        image:
          'https://rws-portal-global.s3.eu-west-1.amazonaws.com/Mpc/Banners/1569501536-cape%20town.jpg',
        start_date: '2019-09-17 00:00:00',
        banner_id: 12.0,
        heading: 'Heading',
        url:
          'https://storybook-stage.mpc.runway.co.za/product_list?gender=MENS',
        position: 1.0,
        gender: ['men', 'woman'],
        title: 'Shop tops',
      },
      {
        subheading: null,
        active: 1.0,
        buttons: [
          {
            colour: null,
            url: 'http://storybook-stage.mpc.runway.co.za/questions',
            text: 'Start now',
          },
        ],
        end_date: '2020-02-29 00:00:00',
        image:
          'https://rws-portal-global.s3.eu-west-1.amazonaws.com/Mpc/Banners/1579516586-Questions%20landing%20page%20gif.gif',
        start_date: '2020-01-01 00:00:00',
        banner_id: 16.0,
        heading: null,
        url: null,
        position: 2.0,
        gender: ['men', 'woman'],
        title: 'Questions',
      },
      {
        subheading: null,
        active: 1.0,
        buttons: [],
        end_date: '2020-05-31 00:00:00',
        image:
          'https://rws-portal-global.s3.eu-west-1.amazonaws.com/Mpc/Banners/1579521478-pexels-photo-131021.jpeg',
        start_date: '2020-01-02 00:00:00',
        banner_id: 17.0,
        heading: 'Shop summers best',
        url: 'http://storybook-dev.mpc.runway.co.za/product_list',
        position: 3.0,
        gender: ['men', 'woman'],
        title: 'Summern clearance',
      },
    ])}
    className={text('Class', '')}
  />
))
