import Student from '../typeorm/entities/Student';
import StudentsRepository from '../typeorm/repositories/StudentsRepository';

interface IRequest {
  name: string;
  email: string;
  cpf: string;
}
class CreateStudentService {
  constructor(private studentsRepository: StudentsRepository) {}

  public async execute({ name, email, cpf }: IRequest): Promise<Student> {
    const user = this.studentsRepository.create({
      name,
      email,
      cpf,
    });

    await this.studentsRepository.save(user);

    return user;
  }
}

export default CreateStudentService;
