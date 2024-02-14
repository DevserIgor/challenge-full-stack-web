import AppError from '@shared/errors/AppError';
import StudentsRepository from '../typeorm/repositories/StudentsRepository';

interface IRequest {
  ra: number;
}
class DeleteStudentService {
  constructor(private studentsRepository: StudentsRepository) {}

  public async execute({ ra }: IRequest): Promise<void> {
    const student = await this.studentsRepository.findByRa(ra);

    if (!student) {
      throw new AppError('Aluno não encontrado.');
    }

    await this.studentsRepository.remove(student);
  }
}

export default DeleteStudentService;
