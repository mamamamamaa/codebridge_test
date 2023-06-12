export const DOG_PROVIDER = 'DOGS_REPOSITORY';

export const COLOR_REGEX = /^(?:[a-zA-Z]+(?:&|$))+$/g;

export const ATTRIBUTE_ENUM = ['name', 'color', 'tail_length', 'weight'];

export const ORDER_ENUM = ['asc', 'desc'];

export const DATABASE_INIT = [
  { name: 'Neo', color: 'red&amber', tail_length: 22, weight: 32 },
  { name: 'Jessy', color: 'black&white', tail_length: 7, weight: 14 },
];
