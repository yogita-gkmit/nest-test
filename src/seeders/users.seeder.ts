import { DataSource } from 'typeorm';
import { User } from '../entities/users.entity';
export class UserSeeder {
  public async run(dataSource: DataSource): Promise<void> {
    const userRepository = dataSource.getRepository(User);
    // Seed data
    const users = [
      {
        name: 'Aditya Singh',
        email: 'aditya@example.com',
        password: '123456',
      },
      {
        name: 'Ayush',
        email: 'ayush@example.com',
        password: '123456',
      },
    ];
    await userRepository.save(users);
  }
}
