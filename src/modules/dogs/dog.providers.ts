import { Dog } from './dog.entity';

export const dogsProviders = [
  {
    provide: 'DOGS_PROVIDER',
    useValue: Dog,
  },
];
