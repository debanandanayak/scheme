import { Router } from 'express';
import { createScheme, deleteScheme, featuredSchemes, getScheme, getSchemeByCategory, getSchemes, searchScheme, updateScheme } from '../controllers/schemes.js'

const router =  Router()
router.post('/',createScheme)
router.put('/:id',updateScheme)
router.delete('/:id',deleteScheme)
router.get('/:id',getScheme)
router.get('/',getSchemes)
router.get('/featured/all',featuredSchemes)
router.get('/category/:category',getSchemeByCategory)
router.get('/search/:term',searchScheme)
export {router}