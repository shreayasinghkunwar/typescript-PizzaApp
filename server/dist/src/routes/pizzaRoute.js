"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
// const { knex } = require('../config/db/index')
const { insertPizza, getAllPizza, getPizzaById, updatePizza, deletePizza } = require("../controllers/pizzaController");
// const PIZZA_TABLE_NAME = "pizzas";
router.post('/addPizza', insertPizza);
router.get('/getAllPizzas', getAllPizza);
router.post('/getpizzabyid', getPizzaById);
router.post('/updatepizza/', updatePizza);
router.post('/deletepizza', deletePizza);
module.exports = router;
//# sourceMappingURL=pizzaRoute.js.map