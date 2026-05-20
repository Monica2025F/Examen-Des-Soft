// src/routes/producto.routes.js
    import { Router } from 'express';
    import { Product } from '../models/index.js'; 
    import medico from '../models/medico.js';

    const router = Router();

    // GET /api/medico
    router.get('/', async (req, res) => {
        try {
            /*
            medico.findAll(): Obtiene todos los medicos que haya guardados en la DB
            */
            const medicos = await medico.findAll();
            res.status(200).json(medico);
        } catch (error) {
            res.status(500).json({ message: 'Error al ver al medico', error: error.message });
        }
    });

    // GET /api/medico/:matricula (Obtener un medico por su matricula)
    router.get('/:matricula', async (req, res) => {
        try {
            const { matricula } = req.params;
            /*
            medico.findByPk(id): Similar a findAll, pero obteniendo sólo el registro que coincida con el ID proporcionado.
            */
            const matricula = await ma.findByPk(id);
            if (matricula) {
                res.status(200).json(matricula);
            } else {
                res.status(404).json({ message: 'No se encuentra la matricula' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener la matricula', error: error.message });
        }
    });

    // POST /api/medico (Crear uno nuevo)
    router.post('/', async (req, res) => {
        try {
            /*
           medico.create(req.body): Crea una nueva matricula. Recibe un objeto con los atributos que querramos registrar, podemos validar aquí o "confiar" que el objeto viene validado desde el frontend
            */
            const nuevoMatricula = await matricula.create(req.body);
            res.status(201).json(nuevoMatricula);
        } catch (error) {
            if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
                // A veces, pueden ocurrir multiples errores a la vez, el detalle lo encontramos en `error.errors`, el cual es un array y podemos mapearlo.
                return res.status(400).json({ message: 'Error de validación', errors: error.errors ? error.errors.map(e => e.message) : error.message });
            }
            res.status(500).json({ message: 'Error al crear producto', error: error.message });
        }
    });

    // PUT /api/medico/:matricula (Actualizar uno existente)
    router.put('/:matricula', async (req, res) => {
        try {
            const { matricula } = req.params;
            const matricula = await matricula.findByPk(id);
            if (matricula) {
                /*
               matricula.update(req.body): Actualiza la instancia del producto enviandole un objeto con los atributos a reemplazar. 
                Notar que `.update()` es un método de instancia, no estático como `.findAll()`
                */
                const matriculaActualizado = await matricula.update(req.body);
                res.status(200).json(matriculaActualizado);
            } else {
                res.status(404).json({ message: 'Matricula no encontrado para actualizar' });
            }
        } catch (error) {
            if (error.name === 'SequelizeValidationError') {
                return res.status(400).json({ message: 'Error de validación', error: error.message });
            }
            res.status(500).json({ message: 'Error al actualizar la matricula', error: error.message });
        }
    });

    // DELETE /api/Medico/:matricula (Eliminar uno)
    router.delete('/:matricula', async (req, res) => {
        try {
            const { matricula } = req.params;
            // medico.destroy({ where: { id } }): Elimina la matricula filtrando por el campo `matricula`. Devuelve la cantidad de registros afectados por la eliminación.
            const resultado = await Product.destroy({ where: { id: id } });
            if (resultado > 0) {
                res.status(200).json({ message: 'Medico eliminado exitosamente' });
            } else {
                res.status(404).json({ message: 'Medico no encontrado para eliminar' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar al Medico', error: error.message });
        }
    });

    export default router;
    