import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Produto } from './produto.model';
import { ProdutosService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
  
  constructor(private produtosService: ProdutosService){}

  @Get()
  async obterTodos():Promise<Produto[]> {
    return this.produtosService.obterTodos();
  }

  @Get(':id')
  async obertUm(@Param() params): Promise<Produto> {
    return this.produtosService.obertUm(params.id);
  }

  @Post()
  async criar(@Body() produto: Produto) {
    console.log(produto);
    this.produtosService.criar(produto);
  }

  @Put(':id')
  async alterar(@Body() produto, @Param() params): Promise<[number, Produto[]]> {
    console.log(produto);
    produto.id = params.id;
    return this.produtosService.alterar(produto);
  }

  @Delete(':id')
  async apagar(@Param() params) {
    this.produtosService.apagar(params.id);
  }


}
