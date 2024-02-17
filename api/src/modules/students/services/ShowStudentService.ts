import Student from '../typeorm/entities/Student';
import StudentsRepository from '../typeorm/repositories/StudentsRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  ra: number;
}
class ShowStudentService {
  constructor(private studentsRepository: StudentsRepository) {}

  public async execute({ ra }: IRequest): Promise<Student> {
    const student = await this.studentsRepository.findByRa(ra);

    if (!student) {
      throw new AppError('Aluno não encontrado.');
    }

    return student;
  }
}

export default ShowStudentService;
