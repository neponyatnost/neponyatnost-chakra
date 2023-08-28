const express = require('express')
const bodyParser = require('body-parser') // Пакет для парсинга тела запроса
const cors = require('cors')

const app = express()
const port = 5000

app.use(cors())
// Используем bodyParser для парсинга JSON-данных из запроса
app.use(bodyParser.json())

// Обработчик POST-запросов на путь '/auth'
app.post('/auth', (req, res) => {
  // В этом примере мы просто отправляем обратно JSON-ответ
  // В реальном приложении здесь может быть логика аутентификации и т.д.
  res.json({ message: 'Аутентификация прошла успешно!' })
})

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000') // Указать ваш домен
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  res.header('Access-Control-Allow-Credentials', 'true') // Включаем поддержку учетных данных
  next()
})

// Запускаем сервер
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`)
})
