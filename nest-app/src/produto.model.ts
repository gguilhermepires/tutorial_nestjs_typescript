import { Table, Model, Column, DataType, AllowNull } from "sequelize-typescript";

@Table
export class Produto extends Model<Produto> {

    @Column({
        type: DataType.STRING(60),
        allowNull: false
    })
    codigo: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    nome: string;

    @Column({
        type: DataType.DECIMAL,
        allowNull: false
    })
    preco: number;

}