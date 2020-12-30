import express, { Express } from 'express'
import bp from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import routes from './routes'
import { PORT } from "./constants/api.constants"

const app: Express = express()

app.use(cors())
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(routes)

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.tgcts.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set('useFindAndModify', false)

mongoose
    .connect(uri, options)
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server running on http://localhost:${PORT}`)
        )
    )
    .catch((error) => {
        throw error
    })