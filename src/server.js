const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT ;
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD ;
const MYSQL_HOST = process.env.MYSQL_HOST ;

app.listen(PORT, () => console.log(`Server running or port ${PORT} e senha ${MYSQL_PASSWORD} e host ${MYSQL_HOST}`));

