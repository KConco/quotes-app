const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Создаем экземпляр приложения Express
const app = express();

//Подключаем Middleware для обработки JSON и разрешения кросс-доменных запросов
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
