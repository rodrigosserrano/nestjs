import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  public messages = [
    {
      id: 1,
      text: 'Primeira mensagem',
    },
    {
      id: 1,
      text: 'Primeira mensagem',
    },
  ];

  findAll() {
    return this.messages;
  }
}
