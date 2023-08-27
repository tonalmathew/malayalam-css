/* eslint-disable no-unused-vars */
const properties = {
  'color': 'നിറം',
  'width': 'വീതി',
  'length': 'നീളം',
  'margin': 'മാർജിൻ',
  'padding': 'പാഡിങ്',
  'border': 'ബോർഡർ'
}

const values = {
  'red': 'ചുവപ്പ്',
  'blue': 'നീല',
  'green': 'പച്ച',
  'black': 'കറുപ്പ്',
  'white': 'വെള്ള'
}

const dict = { 
  ...properties, 
  ...values 
}

module.exports = dict