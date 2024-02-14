import { Like } from 'typeorm';
import Student from '../typeorm/entities/Student';
import StudentsRepository from '../typeorm/repositories/StudentsRepository';

class ListStudentService {
  constructor(private studentsRepository: StudentsRepository) {}

  public async execute(name?: string): Promise<Student[]> {
    const queryBuilder = this.studentsRepository.createQueryBuilder();
    if (name) {
      queryBuilder.where({ name: Like(`%${name}%`) });
    }
    const students = await queryBuilder.addOrderBy('name', 'ASC').getMany();

    return students;
  }
}

export default ListStudentService;
