import { Router } from 'express';
import { getCustomRepository, getRepository, Like } from 'typeorm';
import Curso from '../models/Curso';
import CursoRepository from '../repositories/CursoRepository';
import Repository from '../repositories/CursoRepository';

const cursoRouter = Router();

cursoRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Curso);
    const res = await repo.save(request.body);
    return response.status(201).json(res);
  } catch (err) {
    console.log('err.mensagem:>>', err.message);
  }
});

cursoRouter.get('/', async (req, res) => {
  res.json(await getRepository(Curso).find());
});

// pesquisa pelo termo exato ! case sensitive !!

// cursoRouter.get('/:name', async (request, response) => {
//   const repository = getRepository(Curso);
//   const res = await repository.find({
//     where: {
//       name: request.params.name,
//     },
//   });
//   response.json(res);
// });

// pesquisa com like:

// cursoRouter.get('/:name', async (request, response) => {
//   const repository = getRepository(Curso);
//   const res = await repository.find({
//     name: Like(`%${request.params.name}%`),
//   });

//   response.json(res);
// });

// com repository:

cursoRouter.get('/:name', async (request, response) => {
  const repository = getCustomRepository(CursoRepository);
  const res = await repository.findByName(request.params.name);
  response.json(res);
});

export default cursoRouter;
