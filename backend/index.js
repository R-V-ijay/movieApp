// Packages

import express from "express";

import cookieParser from "cookie-parser";

import dotenv from "dotenv";

import path from "path";

// Files

import connectDB from "./config/database.js";

// Configuration

dotenv.config();

connectDB();

const app = express();

// Middleware

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

const PORT = process.env.PORT;

// Routes

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});

