import { AppDataSource } from './datasource';
import { UserSeeder } from './seeders/users.seeder';
async function runSeeder() {
  await AppDataSource.initialize();
  const userSeeder = new UserSeeder();
  await userSeeder.run(AppDataSource);
  await AppDataSource.destroy();
  console.log('User seeder executed successfully.');
}
runSeeder().catch((error) => {
  console.error('Error running seeder:', error);
  process.exit(1);
});
