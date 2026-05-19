// src/routes/index.js
    import { Router } from 'express';
    import productRoutes from './src/routes/productRoutes.js'
    // ... aqui importaríamos routers de otros modelos

    /*
    Indexaremos todos los routers individuales en uno global y declararemos el url estático donde se ubicará cada uno.
    */
    const router = Router(); 
    
    app.use('/api/products', productRoutes)
    
    export default router;
    
  //Cargamos las Rutas en `app.js`:**
    //Modifica tu archivo `app.js` para cargar rutas:

    import routes from './routes/index.js';
    
    // --- Montar las rutas (antes de `app.listen(...)`) ---
    app.use('/', routes);
    