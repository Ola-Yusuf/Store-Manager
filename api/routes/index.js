import { Router } from 'express';
import sampleData from '../data/sample_data';

const router = Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  req.Time = `Time: ${Date.now()}`;
  console.log('here');
  next();
});

// define the home page route
router.get('/', (req, res) => {
  console.log('Not here');
  // Object.keys(sampleData.product).forEach((key) => {

  //   console.log(sampleData.product[key])
  // });
  res.send(`${req.Time} :: ${Object.keys(sampleData.product)}`);
})

// define the about route
router.get('/about', (req, res) => {
  res.send(`${sampleData.product.Stationaries.length}`)
})

export default router
