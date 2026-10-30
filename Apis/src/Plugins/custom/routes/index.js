'use strict';

const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

/**
 * Developer Custom Routes Hub: src/custom/routes/index.js
 * Automatically reads and mounts any route file inside this folder.
 *
 * Examples:
 * - Adding `items.js`     -> /api/v1/custom/items
 * - Adding `patient.js`   -> /api/v1/custom/patient
 * - Adding `orders.js`    -> /api/v1/custom/orders
 */
fs.readdirSync(__dirname).forEach((file) => {
  if (file === 'index.js' || (!file.endsWith('.js') && !file.endsWith('.jsc')) || file.startsWith('.')) {
    return;
  }

  const slug = path.basename(file, path.extname(file)).toLowerCase();
  try {
    const routeHandler = require(path.join(__dirname, file));
    router.use(`/${slug}`, routeHandler);
    console.log(`[Custom Hub] Loaded /${slug} from src/custom/routes/${file}`);
  } catch (err) {
    console.error(`[Custom Hub] Failed to load src/custom/routes/${file}:`, err.message);
  }
});

// Root Info Endpoint: GET /api/v1/custom
router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'PingDart Developer Custom Extension Hub is active',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
