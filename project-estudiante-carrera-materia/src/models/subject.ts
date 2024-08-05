import{
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    BelongsTo,
    PrimaryKey,
    AutoIncrement,
}from 'sequelize-typescript'
import { Career } from './career';

@Table({
    tableName : 'subjects',
    timestamps : true,
})
export class Subject extends Model<Subject>{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    id! : number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name! : string;

    @ForeignKey(() => Career)
    @Column({
        type:DataType.INTEGER,
        allowNull: false,
    })
    careerId! : number;

    @BelongsTo(() => Career)
    career! :Career;
}