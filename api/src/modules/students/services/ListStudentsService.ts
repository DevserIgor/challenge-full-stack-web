interface IPaginateStudent {
  data: { Name: string }[];
}

class ListStudentsService {
  public async execute(): Promise<IPaginateStudent> {
    const students = {
      data: [{ Name: 'John Doe' }, { Name: 'Jane Doe' }],
    };

    return students;
  }
}
