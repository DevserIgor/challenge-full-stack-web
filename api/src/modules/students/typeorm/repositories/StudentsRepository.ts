import Student from '@modules/students/typeorm/entities/Student';
import { Repository } from 'typeorm';

interface IStudentsRepository {
  findByRa(ra: number): Promise<Student | null>;
  findByEmail(email: string): Promise<Student | null>;
  findAll(): Promise<Student[]>;
}

class StudentsRepository
  extends Repository<Student>
  implements IStudentsRepository
{
  public async findByRa(ra: number): Promise<Student | null> {
    return this.findOne({
      where: { ra },
    });
  }

  public async findByEmail(email: string): Promise<Student | null> {
    return this.findOne({ where: { email } });
  }

  public async findAll(): Promise<Student[]> {
    return this.find();
  }
}

export default StudentsRepository;
