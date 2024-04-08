import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js'
import logger from '../logger/winston.logger.js'

export let dbInstance: typeof mongoose

const connectDB = async ()=>{
    try {
        const connectInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        dbInstance = connectInstance
        logger.info(`Mongodb Connected! Db host ${connectInstance.connection.host}`)
    } catch (error:any) {
        logger.error(error.message)
        process.exit(1)
    }
}

export default connectDB