import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import SectionBrandsList from './SectionBrandsList'

storiesOf('Organisms/Sections/Accounts', module)
  .add('SectionBrandsList', () => (
    <SectionBrandsList
      className={text('Class', '')}
      items={object('items', items)}
      onAddBrand={action('onAddBrand')}
    />
  ))

  const items = [
    "AX Paris", 
    "Aca Joe", 
    "Acid Campaign", 
    "Adam Levine", 
    "Adidas Originals", 
    "Adorables Avarca", 
    "Aldo", 
    "Alessia", 
    "Alexander McQueen", 
    "All About Eve", 
    "Alpha Industries", 
    "Alterna", 
    "Amanda Laird Cherry", 
    "Amara Reya", 
    "Anias Jewellery", 
    "Anny", 
    "Anton Fabi", 
    "Arko", 
    "Asics", 
    "Awol", 
    "BONANG by Bonang Matheba", 
    "BOSSI", 
    "BTime", 
    "Baby Corner",
    "Bad Boy", 
    "Bags by Bia",
    "Bags by Brad Scott", 
    "Bear", 
    "Beauty Factory", 
    "Bed Head", 
    "Beyonce", 
    "Billabong", 
    "Billion Dollar Brows", 
    "Birkenstock", 
    "Bjorn Borg", 
    "Blackcherry", 
    "Bobbi Brown", 
    "Bombshell", 
    "BondiBlu", 
    "Burberry", 
    "Butan", 
    "Butterfly Feet", 
    "C Squared", 
    "CECC", 
    "CHELLA", 
    "Call It Spring", 
    "Calvin Klein", 
    "Candy's",
    "Carrera Eyewear", 
    "Casio", 
    "Catrice", 
    "Character Baby", 
    "Character Fashion", 
    "Chulaap", 
    "Ciaté", 
    "Clarins", 
    "Clinique", 
    "Closet London", 
    "Color Savy", 
    "Columbia", 
    "Comfit", 
    "Contempo", 
    "Contempo Curve"
  ]