import Student from '../typeorm/entities/Student';
import AppError from '@shared/errors/AppError';
import StudentsRepository from '../typeorm/repositories/StudentsRepository';

interface IRequest {
  ra: number;
  name: string;
  email: string;
  cpf: string;
}
class UpdateStudentService {
  constructor(private studentRepository: StudentsRepository) {}

  public async execute({ ra, name, email, cpf }: IRequest): Promise<Student> {
    const student = await this.studentRepository.findByRa(ra);

    if (!student) {
      throw new AppError('Aluno não encontrado.');
    }

    student.name = name;
    student.email = email;
    student.cpf = cpf;

    await this.studentRepository.save(student);

    return student;
  }
}

export default UpdateStudentService;
