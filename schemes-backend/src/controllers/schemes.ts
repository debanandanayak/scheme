import express, { NextFunction } from 'express'
import logger from '../logger/winston.logger.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { Schemes } from '../models/scheme.model.js'
import { ApiError } from '../utils/ApiError.js'
export const createScheme = asyncHandler(async (req:express.Request,res:express.Response,next:NextFunction) =>{
    const body = req.body
    const document = await Schemes.create(body)
    res.status(201).json({id:document.id})
})

export const getSchemes = asyncHandler(async (req:express.Request,res:express.Response,next:NextFunction) =>{
    const documents = await Schemes.find()
    res.status(200).json(documents)
})

export const getScheme = asyncHandler(async (req:express.Request,res:express.Response,next:NextFunction) =>{
    const id = req.params.id
    const document = await Schemes.findById(id)
    res.status(200).json(document)
})

export const deleteScheme = asyncHandler(async (req:express.Request,res:express.Response,next:NextFunction) =>{
    const id = req.params.id
    await Schemes.deleteOne({_id:id})
    res.sendStatus(204)
})

export const updateScheme = asyncHandler(async (req:express.Request,res:express.Response,next:NextFunction) =>{
    const id = req.params.id
    const body = req.body
    const document = await Schemes.findByIdAndUpdate(id,body)
    if(document==null){
        return res.sendStatus(204)
    }
    return res.sendStatus(200)
    
})

export const getSchemeByCategory = asyncHandler(async (req:express.Request,res:express.Response,next:NextFunction) =>{
    const category = req.params.category
    const documents = await Schemes.find({categories:category})
    res.status(200).json(documents)
})

export const searchScheme = asyncHandler(async (req:express.Request,res:express.Response,next:NextFunction) =>{
    const searchText= req.params.term
    logger.info(searchText)
    const documents = await Schemes.find({$text:{$search:searchText}}).exec()
    res.status(200).json(documents)
})

export const featuredSchemes = asyncHandler(async (req:express.Request,res:express.Response,next:NextFunction) =>{
    const documents = await Schemes.find({featured:true})
    res.status(200).json(documents)
})

export const suggestedSchemes = asyncHandler((req:express.Request,res:express.Response,next:NextFunction) =>{
    const body = req.body
    logger.info(req.body)
    throw new ApiError(400,"Not implemented yet")
})