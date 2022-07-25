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

  async findById(id: number) {
    //está validando se o ID é o mesmo ID que existe no array, porém valida também o tipo
    const message = this.messages.find((msg) => msg.id === id);

    if (!message) throw Error(`Mensagem com o ID ${id} não encontrada`);

    return message;
  }

  create(body: Message) {
    return this.messages.push(body);
  }

  update(id: number, message: Message) {
    const index = this.messages.findIndex((message) => message.id === id);

    this.messages[index] = message;

    return this.messages[index];
  }

  delete(id: number) {
    const index = this.messages.findIndex((message) => message.id === id);

    delete this.messages[index];

    return true;
  }
}
