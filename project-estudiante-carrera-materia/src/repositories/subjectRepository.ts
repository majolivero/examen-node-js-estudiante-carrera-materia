import { injectable } from 'tsyringe';
import { Subject } from '../models';
import { CreationAttributes } from 'sequelize';

@injectable() //Significa que la clase es un servicio que puede ser inyectado
export default class SubjectRepository {
    async findAll() {
        return await Subject.findAll();
    }

    async findById(id: number) {
        return await Subject.findByPk(id);
    }

    async findBySubjectId(id: number) {
        return await Subject.findAll({ where: { id } });
    }

    async create(subject: CreationAttributes<Subject>) {
        return await Subject.create(subject);
    }

    async update(subject:Subject){
        Subject.findOne({ where: { id: subject.id }}).then(subjectParam => {
            if (subjectParam){

                subjectParam.name = subject.name;
                subjectParam.careerId = subject.careerId
                subjectParam.save().then(() => {
                    return 'materia actualizada';
                })
            }

        });
    }

    async delete(id:number){
        return await Subject.destroy({ where: { id }});
    }
}