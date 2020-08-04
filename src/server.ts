import cors from 'cors'
import express from 'express';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// GET: Busca ou lista informações
// POST: Criar alguma nova informação
// PUT: Atualizar informações
// DELETE: Deletar informações

// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route Params: identificar qual recurso a atualizar ou deletar
// Query Params: Paginação, filters, ordenação




app.listen(3333);

