/*const express = require("express");
const {hola, adios} = require("./holamundo");*/

import express from "express";
import {hola, adios} from "./holamundo.js";

const port = 3001;
const app = express();

app.get("/", (req, res) => {
    hola(req, res);
});

app.get("/adios", (req, res) => {
    adios(req, res);
});

app.listen(port, () => {
    console.log(`Hemos arrancado desde el puerto ${port}`);
});

