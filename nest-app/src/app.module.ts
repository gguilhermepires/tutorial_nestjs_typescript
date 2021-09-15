import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { Produto } from './produto.model';
import { ProdutosController } from './produtos.controller';
import { ProdutosService } from './produtos.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql' ,
      host: process.env.BANCO_DE_DADOS_HOST,
      port: Number(process.env.BANCO_DE_DADOS_PORTA),
      username: process.env.BANCO_DE_DADOS_USUARIO,
      password: process.env.BANCO_DE_DADOS_SENHA,
      database: process.env.BANCO_DE_DADOS_DATABASE,
      autoLoadModels: true,
      synchronize: true
    }),
    SequelizeModule.forFeature([Produto]),
  ],
  controllers: [AppController, ProdutosController],
  providers: [
    ProdutosService
  ],
})
export class AppModule {}
