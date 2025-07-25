import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/status', (req, res) => {
  res.send({ ok: true })
})

app.listen(4000, () => console.log('API running on http://localhost:4000'))
