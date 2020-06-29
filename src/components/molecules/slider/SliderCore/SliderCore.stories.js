/* eslint-disable max-len */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, select } from '@storybook/addon-knobs'

import SliderCore from './SliderCore'

storiesOf('Molecules/Slider', module)
  .add('SliderCore', () => (
    <SliderCore
      theme={select('Theme', [null, 'men', 'women'], null)}
      settings={object('Settings', {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
        autoplay: true,
        autoplaySpeed: 4500,
      })}
    >
      <img src='https://rws-portal-global.s3.eu-west-1.amazonaws.com/Images/EDI_MAXIKIMONOSLEEVECARDI_BURGUNDY/EDI_MAXIKIMONOSLEEVECARDI_BURGUNDY%7C4.jpeg' alt='Perfect' />
      <img src='https://rws-portal-global.s3.eu-west-1.amazonaws.com/Images/EDI_MAXIKIMONOSLEEVECARDI_BURGUNDY/EDI_MAXIKIMONOSLEEVECARDI_BURGUNDY%7C4.jpeg' alt='Perfect' />
      <img src='https://rws-portal-global.s3.eu-west-1.amazonaws.com/Images/EDI_MAXIKIMONOSLEEVECARDI_BURGUNDY/EDI_MAXIKIMONOSLEEVECARDI_BURGUNDY%7C4.jpeg' alt='Perfect' />
      <img src='https://rws-portal-global.s3.eu-west-1.amazonaws.com/Images/EDI_MAXIKIMONOSLEEVECARDI_BURGUNDY/EDI_MAXIKIMONOSLEEVECARDI_BURGUNDY%7C4.jpeg' alt='Perfect' />
      <img src='https://rws-portal-global.s3.eu-west-1.amazonaws.com/Images/EDI_MAXIKIMONOSLEEVECARDI_BURGUNDY/EDI_MAXIKIMONOSLEEVECARDI_BURGUNDY%7C4.jpeg' alt='Perfect' />
    </SliderCore>
  ))
