import { Phrase } from "../phrases/entities/phrase.entity";
import { PhrasesController } from './phrases.controller';
import { PhrasesService } from './phrases.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "postgres",
      "host": process.env.HOST,
      "port": 5432,
      "username": process.env.USERNAME,
      "password": process.env.PASSWORD,
      "database": "phrases-db",
      "entities": ["dist/**/*.entity{.ts,.js}"],
      "synchronize": true
    }),
    TypeOrmModule.forFeature([Phrase]),
  ],
  controllers: [PhrasesController],
  providers: [PhrasesService],
})
export class PhrasesModule {};
