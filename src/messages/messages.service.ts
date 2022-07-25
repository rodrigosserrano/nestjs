import { Injectable } from '@nestjs/common';
import { Message } from './Message';

@Injectable()
export class MessagesService {
  public messages: Message[] = [
    {
      id: 1,
      text: 'Primeira mensagem',
    },
    {
      id: 2,
      text: 'Segunda mensagem',
    },
  ];

  findAll() {
    return this.messages;
  }

  findById(id: number) {
    //está validando se o ID é o mesmo ID que existe no array, porém valida também o tipo
    return this.messages.find((message) => message.id === id);
  }

  create(body: Message) {
    return this.messages.push(body);
  }
}
