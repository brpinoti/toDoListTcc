// seuController.test.js

const tasksModel = require('../models/tasksModel'); // Ajuste o caminho conforme a estrutura do seu projeto
const { getAll } = require('../controllers/tasksController'); // Ajuste o caminho conforme a estrutura do seu projeto

jest.mock('../models/tasksModel', () => ({
  getAll: jest.fn()
}));

describe('Controller - getAll', () => {
  it('deve retornar as tarefas corretamente', async () => {
    // Configuração do mock para retornar dados fictícios
    const mockTasks = [{ id: 1, title: 'Tarefa 1' }, { id: 2, title: 'Tarefa 2' }];
    tasksModel.getAll.mockResolvedValueOnce(mockTasks);

    // Mock do objeto de resposta
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    // Chamada da função getAll do controller
    await getAll({}, mockResponse);

    // Verificações
    expect(tasksModel.getAll).toHaveBeenCalledTimes(1);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith(mockTasks);
  });
});
