import { Dog } from './models/dog.entity';

export const dogsProviders = [
  {
    provide: 'DOGS_REPOSITORY',
    useValue: Dog,
  },
];
