import { Like } from 'typeorm';
import Student from '../typeorm/entities/Student';
import StudentsRepository from '../typeorm/repositories/StudentsRepository';

class ListStudentService {
  constructor(private studentsRepository: StudentsRepository) {}

  public async execute(search?: string): Promise<Student[]> {
    const queryBuilder = this.studentsRepository.createQueryBuilder();
    if (search) {
      queryBuilder
        .orWhere({ name: Like(`%${search}%`) })
        .orWhere({ email: Like(`%${search}%`) })
        .orWhere({ cpf: Like(`%${search}%`) });
    }
    const students = await queryBuilder.addOrderBy('name', 'ASC').getMany();

    return students;
  }
}

export default ListStudentService;
