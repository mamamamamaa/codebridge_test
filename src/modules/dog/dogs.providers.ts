import { Dog } from './dog.entity';

export const dogsProviders = [
  {
    provide: 'DOGS_REPOSITORY',
    useValue: Dog,
  },
];
