import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ec2-174-129-230-46.compute-1.amazonaws.com',
      port: 5432,
      username: 'rirepzulchkheu',
      password:
        'd3518aabec9aabe740867258ced5707a4e7d8ea8f80197b1615d8f648f38917c',
      database: 'dca2hc1tdeurq5',
      entities: ['dist/entity/**/*.entity.ts'],
      synchronize: process.env.NODE_ENV !== 'production',
      logging: true,
      ssl: {
        ca: process.env.SSL_CERT,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
