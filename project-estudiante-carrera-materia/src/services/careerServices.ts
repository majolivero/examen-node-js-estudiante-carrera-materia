import CareerRepository from '../repositories/careerRepository';
import { CreationAttributes } from 'sequelize';
import { injectable, inject } from 'tsyringe';
import { Career } from '../models';

@injectable()
export default class CareerService {
    constructor(
        @inject(CareerRepository) private careerRepository: CareerRepository
    ) {}

    async getAllCareers() {
        return await this.careerRepository.findAll();
    }

    async getCareerById(id: number) {
        return await this.careerRepository.findById(id);
    }

    async getCareerByUserId(userId: number) {
        return await this.careerRepository.findByCareerId(userId);
    }

    async createCareer(career: CreationAttributes<Career>) {
        return await this.careerRepository.create(career);
    }

    async updateCareer(career: Career) {
        return await this.careerRepository.update(career);
    }

    async deleteCareer(id: number) {
        return await this.careerRepository.delete(id);
    }
}