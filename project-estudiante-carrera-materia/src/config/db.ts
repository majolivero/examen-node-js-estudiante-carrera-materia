import { Sequelize } from 'sequelize-typescript';
import { User, Subject, Career } from '../models';

const sequelize: Sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'projectEstudianteCarrera',
    models: [User, Subject, Career], // Añade todos tus modelos aquí
});

export default sequelize;