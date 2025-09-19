const express = require("express");
const app = require("./src/app");
const serverless = require("serverless-http");

// Export for Vercel
module.exports = serverless(app);
