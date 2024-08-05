import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    BelongsTo,
    ForeignKey,
}from 'sequelize-typescript';
import { Career } from './career';

@Table({
    tableName: 'users',
    timestamps: true,
})
export class User extends Model<User> {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type:DataType.INTEGER
    })
    id!: number;

    @Column({
        type:DataType.STRING,
        allowNull: false,
    })
    name! : string;

    @Column({
        type:DataType.INTEGER,
        allowNull: false,
    })
    age! : number;

    @ForeignKey(() => Career)
    @Column({
        type:DataType.INTEGER,
        allowNull: false,
    })
    careerId! : number;

    @BelongsTo(() => Career)
    career! : Career;
}