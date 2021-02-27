const parser = require("csv-parse/lib/sync");
const fs = require("fs");
const csvString = fs.readFileSync("./cypress/data/data.csv");
const contactUsers = parser(csvString, { columns: true });

fs.writeFileSync(
  "data.js",
  "module.exports = " + JSON.stringify(contactUsers, null, " ")
);
