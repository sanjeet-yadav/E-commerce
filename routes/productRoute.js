import express from 'express'
import { isAdmin, requireSingnIN } from '../middlewares/authMiddleware.js'
import { createProductController, deleteProductController, getProductController, getSingleProductController, productCountController, productFiltersController, productListController, productPhotoController, updateProductController } from '../controllers/productController.js'
import formidable from 'express-formidable'

const router = express.Router()

// router
router.post('/create-product', requireSingnIN, isAdmin, formidable(), createProductController )

// get product
router.get('/get-product', getProductController ) 

//singile product
router.get("/get-product/:slug", getSingleProductController)

// get photo
router.get('/product-photo/:pid', productPhotoController)

// delete product
router.delete("/product", deleteProductController) 

// update product 
router.put("/update-product/:pid", requireSingnIN, isAdmin, formidable(), updateProductController
)
 
// delete product 
router.delete("/delete-product/:pid", requireSingnIN, isAdmin, formidable(), deleteProductController
)

// fileter product
router.post('/product-filters', productFiltersController)

// product count
router.get('/product-count', productCountController)

// product per Page

router.get("/product-list/:page", productListController)



export default router 