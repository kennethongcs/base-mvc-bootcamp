import db from './models/index.mjs';

// import your controllers here
import initItemsController from './controllers/items-controller.mjs';

const items = initItemsController(db);

export default function bindRoutes(app) {
  app.get('/items', items.render);
}
