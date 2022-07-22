import { Router } from 'express';

import {
    events,
} from '../controllers/controller.js';

const router = Router();

const map = {
    ["/events"]: events,
}

for (let url in map) {
    router.get(url, map[url]);
}

export default router;