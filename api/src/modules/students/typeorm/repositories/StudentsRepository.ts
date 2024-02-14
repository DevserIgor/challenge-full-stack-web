import { Repository } from 'typeorm';
import Student from '../entities/Student';
import { DataSource } from 'typeorm';

class StudentsRepository extends Repository<Student> {
  constructor(dataSource: DataSource) {
    super(Student, dataSource.createEntityManager());
  }

  public async findByName(name: string): Promise<Student | null> {
    const student = await this.findOne({
      where: {
        name,
      },
    });

    return student;
  }

  public async findByRa(ra: number): Promise<Student | null> {
    const student = await this.findOne({
      where: {
        ra,
      },
    });

    return student;
  }

  public async findBycpf(cpf: string): Promise<Student | null> {
    const student = await this.findOne({
      where: {
        cpf,
      },
    });

    return student;
  }

  public async findByEmail(email: string): Promise<Student | null> {
    const Student = await this.findOne({
      where: {
        email,
      },
    });

    return Student;
  }
}

export default StudentsRepository;
