import { Dog } from '../modules/dog/models/dog.entity';
import { DATABASE_INIT } from '../consts/dog';

export async function initializeDatabase() {
  try {
    const existingDogs = await Dog.findAll();

    if (existingDogs.length === 0) await Dog.bulkCreate(DATABASE_INIT);
  } catch (error) {
    console.error('Database initializing failed: ' + error);
  }
}
