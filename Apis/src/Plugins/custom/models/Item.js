'use strict';

const path = require('path');
const { getPluginDb } = require('../pluginDb');

// Automatically associates this model with 'custom' plugin
const { defineModel, DataTypes } = getPluginDb('custom');

/**
 * Custom Developer Model: Item
 * Location: src/Plugins/custom/models/Item.js
 *
 * Table Name: `custom_items` (Enforced 100% by getPluginDb)
 */
const Item = defineModel('Item', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  code: {
    type: DataTypes.STRING(64),
    allowNull: false,
    unique: true
  },
  name: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  category: {
    type: DataTypes.STRING(100),
    defaultValue: 'General'
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0.00
  },
  status: {
    type: DataTypes.ENUM('active', 'inactive', 'archived'),
    defaultValue: 'active'
  },
  extraData: {
    type: DataTypes.JSON,
    allowNull: true
  }
}, {
  tableName: 'items' // Automatically becomes `custom_items`!
});

module.exports = Item;
