import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Message } from './Message';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Get()
  findAll() {
    return this.messagesService.findAll();
  }

  @Get(':id')
  findById(@Param() params) {
    //Está recebendo uma string
    // console.log(params.id, typeof params.id);
    //colocando um '+' entende que é um number
    return this.messagesService.findById(+params.id);
  }

  @Post()
  create(@Body() body: Message) {
    return this.messagesService.create(body);
  }
}
