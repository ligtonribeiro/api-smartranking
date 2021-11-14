import { Injectable, Logger } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import { v1 as uuid } from 'uuid';

@Injectable()
export class JogadoresService {
  private jogadores: Jogador[] = [];
  private readonly logger = new Logger(JogadoresService.name);

  async criarAtualizarJogador(criarJogadorDto: CriarJogadorDto): Promise<void> {
    this.criar(criarJogadorDto);
  }

  private criar(criaJogadorDto: CriarJogadorDto): void {
    const { telefoneCelular, nome, email } = criaJogadorDto;

    const jogador: Jogador = {
      _id: uuid(),
      telefoneCelular,
      nome,
      email,
      ranking: 'A',
      posicaoRanking: 1,
      urlFotoJogador: 'fotoPlayer',
    };
    this.logger.log(`criaJogadorDto: ${JSON.stringify(jogador)}`);
    this.jogadores.push(jogador);
  }
}
