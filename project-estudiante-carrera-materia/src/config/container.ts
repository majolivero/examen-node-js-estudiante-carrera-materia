import { container } from 'tsyringe';
import UserService from '../services/userService';
import UserRepository from '../repositories/userRepository';
import SubjectRepository from '../repositories/subjectRepository';
import SubjectService from '../services/subjectServices';
import CareerRepository from '../repositories/careerRepository';
import CareerService from '../services/careerServices';

container.registerSingleton<UserRepository>(UserRepository);
container.registerSingleton<UserService>(UserService);

container.registerSingleton<SubjectRepository>(SubjectRepository);
container.registerSingleton<SubjectService>(SubjectService);

container.registerSingleton<CareerRepository>(CareerRepository);
container.registerSingleton<CareerService>(CareerService);