import express, { Router } from 'express'
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from '../controllers/categoryController.js'
import { isAdmin, requireSingnIN } from './../middlewares/authMiddleware.js'

const router = express.Router()

//routes
router.post('/create-category', requireSingnIN, isAdmin, createCategoryController )

// update category
router.put('/update-category/:id', requireSingnIN, isAdmin, updateCategoryController )

// getAll category
router.get('/get-category', categoryController )

// singile category

router.get('/single-category/:slug' ,singleCategoryController)

// Delete category
router.delete('/delete-category/:id', requireSingnIN, isAdmin, deleteCategoryController)

export default router; 
