const validateFieldTitle = (request, response, next) => {
  const { body } = request;

  if (body.title === undefined) {
    return response.status(400).json({ message: 'O campo título é de preenchimento obrigatório' });
  }

  if (body.title === '') {
    return response.status(400).json({ message: 'O campo título é de preenchimento obrigatório' });
  }

  next();
};

const validateFieldStatus = (request, response, next) => {
  const { body } = request;

  if (body.status === undefined) {
    return response.status(400).json({ message: 'O campo Status é de preenchimento obrigatório' });
  }

  if (body.status === '') {
    return response.status(400).json({ message: 'O campo Status é de preenchimento obrigatório' });
  }

  next();
};

module.exports = {
  validateFieldStatus,
  validateFieldTitle,
};
