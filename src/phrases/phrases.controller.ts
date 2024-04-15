import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhrasesService } from './phrases.service';
import { Phrase } from './entities/phrase.entity';

@Controller('phrases')
export class PhrasesController {
  constructor(private readonly phrasesService: PhrasesService) {}

  @Get()
  findAll() {
    return this.phrasesService.findAll();
  };

  @Post()
  async create(
      @Body('content') content: string, 
      @Body('actor') author: string, 
      @Body('createdAt') createdAt: string
    ): Promise<Phrase> {
    return await this.phrasesService.create(content, author, createdAt);
  };

  @Patch(':id')
  async update(
      @Param('id') id: number, 
      @Body('conteudo') content: string, 
      @Body('autor') author: string, createdAt: string
    ): Promise<Phrase> {
      return await this.phrasesService.update(id, content, author, createdAt);
  };

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.phrasesService.remove(id);
  };
}
