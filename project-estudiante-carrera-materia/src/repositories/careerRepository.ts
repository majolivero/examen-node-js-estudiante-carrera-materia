import { injectable } from 'tsyringe';
import { Career } from '../models';
import { CreationAttributes } from 'sequelize';

@injectable() //Significa que la clase es un servicio que puede ser inyectado
export default class CareerRepository {
    async findAll() {
        return await Career.findAll();
    }

    async findById(id: number) {
        return await Career.findByPk(id);
    }

    async findByCareerId(id: number) {
        return await Career.findAll({ where: { id } });
    }

    async create(career: CreationAttributes<Career>) {
        return await Career.create(career);
    }

    async update(career:Career){
        Career.findOne({ where: { id: career.id }}).then(careerParam => {
            if (careerParam){

                careerParam.name = career.name;
                careerParam.save().then(() => {
                    return 'carrera actualizada';
                })
            }

        });
    }

    async delete(id:number){
        return await Career.destroy({ where: { id }});
    }
}