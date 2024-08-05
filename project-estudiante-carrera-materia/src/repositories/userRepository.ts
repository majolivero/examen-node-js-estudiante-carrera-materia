import { injectable } from 'tsyringe';
import { User } from '../models/user';

@injectable()
export default class UserRepository {
    async findAll() {
        return await User.findAll();
    }

    async findById(id: number) {
        return await User.findByPk(id);
    }

    async create(user: User) {
        return await User.create(user);
    }

    async update(user:User){
        User.findOne({ where: { id: user.id }}).then(userParam => {
            if (userParam){

                userParam.name = user.name;
                userParam.age = user.age;
                userParam.careerId = user.careerId
                userParam.save().then(() => {
                    return 'usuario actualizado';
                })
            }

        });
    }

    async delete(id:number){
        return await User.destroy({ where: { id }});
    }
}