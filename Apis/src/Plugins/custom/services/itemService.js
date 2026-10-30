'use strict';

const Item = require('../models/Item');

/**
 * Custom Developer Service: itemService
 * Location: src/custom/services/itemService.js
 *
 * Encapsulates business logic, calculations, and database calls.
 */
class ItemService {
  async listItems(query = {}) {
    const { status, limit = 50, page = 1 } = query;
    const where = {};
    if (status) where.status = status;

    const offset = (parseInt(page, 10) - 1) * parseInt(limit, 10);
    return await Item.findAndCountAll({
      where,
      limit: parseInt(limit, 10),
      offset,
      order: [['createdAt', 'DESC']]
    });
  }

  async getItemById(id) {
    return await Item.findByPk(id);
  }

  async createItem(payload) {
    const code = `REC-${Date.now().toString().slice(-6)}`;
    return await Item.create({
      ...payload,
      code
    });
  }

  async updateItem(id, payload) {
    const item = await Item.findByPk(id);
    if (!item) return null;
    return await item.update(payload);
  }

  async archiveItem(id) {
    const item = await Item.findByPk(id);
    if (!item) return null;
    return await item.update({ status: 'archived' });
  }
}

module.exports = new ItemService();
