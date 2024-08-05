import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
}from 'sequelize-typescript';

@Table({
    tableName : 'careers',
    timestamps : true,
})
export class Career extends Model<Career> {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type:DataType.INTEGER,
    })
    id!: number;

    @Column({
        type:DataType.STRING,
        allowNull: false,
    })
    name! : string;
}