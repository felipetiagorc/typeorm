import { EntityRepository, Repository } from 'typeorm';
import Curso from '../models/Curso';
@EntityRepository(Curso)
export default class CursoRepository extends Repository<Curso> {
  public async findByName(name: string): Promise<Curso[]> {
    return this.find({
      where: {
        name: `LIKE '%${name}%'`,
      },
    });
  }
}
