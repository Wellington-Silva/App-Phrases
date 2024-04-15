import { Injectable, NotFoundException } from '@nestjs/common';
import { Phrase } from '../phrases/entities/phrase.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PhrasesService {

    constructor(
        @InjectRepository(Phrase)
        private readonly phraseRepository: Repository<Phrase>,
    ) { }

    findAll() {
        return this.phraseRepository.find();
    };

    async create(content: string, author: string, createdAt: string) {
        try {
            const phrase = new Phrase();
            phrase.content = content;
            phrase.author = author;
            phrase.createdAt = createdAt;
            return await this.phraseRepository.save(phrase);
        } catch (e) {
            throw new NotFoundException('Erro ao cadastrar frase');
        }
    };

    async update(id: number, content: string, author: string, createdAt: string): Promise<Phrase> {
		try {
			const phrase = await this.phraseRepository.findOne({ where: { id } });
			if (!phrase) {
				throw new NotFoundException('Frase não encontrada ou inexistente');
			}
			phrase.content = content;
			phrase.author = author;
			phrase.createdAt = createdAt
			return await this.phraseRepository.save(phrase);
		} catch (e) {
			throw new NotFoundException('Erro ao editar frase');
		}
    };

    async remove(id: number) {
        const result = await this.phraseRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException('Frase não encontrada');
        }
    };
};
