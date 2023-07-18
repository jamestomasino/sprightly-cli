const yargs = require("yargs");

const options = yargs
 .usage("Usage: -n <name>")
 .option("i", { alias: "entry", describe: "Entry point for template", type: "string", demandOption: true })
 .option("d", { alias: "data", describe: "JSON file for data object", type: "string", demandOption: false })
 .argv;

let data = {}
if (options.data) {
  try {
    const fs = require('fs');
    const rawdata = fs.readFileSync(options.data);
    data = JSON.parse(rawdata);
  } catch (_e) {
    console.log ('error loading json data')
  }
}

sprightly("${options.entry}", data )
