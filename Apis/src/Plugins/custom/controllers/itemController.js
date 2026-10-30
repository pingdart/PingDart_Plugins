'use strict';

const itemService = require('../services/itemService');

/**
 * Custom Developer Controller: itemController
 * Location: src/custom/controllers/itemController.js
 *
 * Handles HTTP requests and delegates to itemService.
 */

exports.getAll = async (req, res) => {
  try {
    const result = await itemService.listItems(req.query);
    return res.json({
      success: true,
      total: result.count,
      data: result.rows
    });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const item = await itemService.getItemById(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, message: 'Record not found' });
    }
    return res.json({ success: true, data: item });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const item = await itemService.createItem(req.body);
    return res.status(201).json({
      success: true,
      message: 'Created successfully',
      data: item
    });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await itemService.updateItem(req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Record not found' });
    }
    return res.json({ success: true, data: updated });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const archived = await itemService.archiveItem(req.params.id);
    if (!archived) {
      return res.status(404).json({ success: false, message: 'Record not found' });
    }
    return res.json({ success: true, message: 'Archived successfully' });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
};
