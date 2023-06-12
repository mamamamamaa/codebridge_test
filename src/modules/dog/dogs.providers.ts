import { Dog } from './models/dog.entity';
import { DOG_PROVIDER } from '../../consts/dog';

export const dogsProviders = [
  {
    provide: DOG_PROVIDER,
    useValue: Dog,
  },
];
