import express from 'express'
import { config } from 'dotenv'
config()
import { errorHandler } from './middlewares/errorHandler.js'
import { router as schemeRoute } from './routes/scheme.router.js'
import logger from './logger/winston.logger.js'
import cors from 'cors'
import AdminJS from "adminjs"
import AdminJSExpress from "@adminjs/express"
import * as AdminJSMongoose from "@adminjs/mongoose"
import { Schemes } from './models/scheme.model.js'
AdminJS.registerAdapter({
  Database: AdminJSMongoose.Database,
  Resource: AdminJSMongoose.Resource
})
import connectDB from './db/index.js'
import { Users } from './models/user.model.js'
const app = express()

const adminJs = new AdminJS({
  resources: [
    {
      resource: Schemes,
      options: {
        properties: {
          description: {
            type: 'textarea',
            props: {
              rows: 5,
            },
          },
          detailedDescription: {
            type: 'textarea',
            props: {
              rows: 5,
            },
          },
          about:{
            type: 'textarea',
            props: {
              rows: 5,
            },
          },
          benefits:{
            type: 'textarea',
            props: {
              rows: 5,
            },
          },
        },
      }
    },
    { resource: Users }
  ],
  databases: [],
  rootPath: '/admin',
})
// Build and use a router to handle AdminJS routes.
const router = AdminJSExpress.buildRouter(adminJs)
app.use(adminJs.options.rootPath, router)

app.use(cors())
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
  logger.info(req.method + " " + req.url)
  next()
})
connectDB()
app.use('/schemes', schemeRoute)
app.use(errorHandler)
app.listen(process.env.PORT, () => {
  console.log(`Application running on port ${process.env.PORT}`)
})

export { app }
