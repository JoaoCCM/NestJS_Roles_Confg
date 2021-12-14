import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config';

const { DB_HOST, DB_USER, DB_PORT, DB_PASSWORD, NODE_ENV = null, DB_NAME } = process.env;

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: DB_HOST,
    port: parseInt(DB_PORT),
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    autoLoadEntities: true,
    entities: [__dirname + '/../entities/*.entity.{js,ts}'],
    synchronize: NODE_ENV && NODE_ENV !== 'production' ? true : false,
    ssl: false,
    migrations: ['src/migrations/*.ts'],
    migrationsTableName: 'migration',
    cli: {
        migrationsDir: 'src/migration',
    },
}