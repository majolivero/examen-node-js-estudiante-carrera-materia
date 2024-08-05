import SubjectRepository from '../repositories/subjectRepository';
import { CreationAttributes } from 'sequelize';
import { injectable, inject } from 'tsyringe';
import { Subject } from '../models';

@injectable()
export default class SubjectService {
    constructor(
        @inject(SubjectRepository) private subjectRepository: SubjectRepository
    ) {}

    async getAllSubjects() {
        return await this.subjectRepository.findAll();
    }

    async getSubjectById(id: number) {
        return await this.subjectRepository.findById(id);
    }

    async getSubjectByUserId(userId: number) {
        return await this.subjectRepository.findById(userId);
    }

    async createSubject(subject: CreationAttributes<Subject>) {
        return await this.subjectRepository.create(subject);
    }

    async updateSubject(subject: Subject) {
        return await this.subjectRepository.update(subject);
    }

    async deleteSubject(id: number) {
        return await this.subjectRepository.delete(id);
    }
}