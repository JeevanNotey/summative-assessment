const fs = require("fs");

function assert(condition, message) {
  if (!condition) {
    console.error(`Test failed: ${message}`);
    process.exit(1);
  }
}

const html = fs.readFileSync("app/index.html", "utf8");
const js = fs.readFileSync("app/script.js", "utf8");
const css = fs.readFileSync("app/style.css", "utf8");

assert(html.includes("DevOps Pipeline Demo"), "HTML should contain the app title");
assert(html.includes("nameInput"), "HTML should contain the name input");
assert(html.includes("roleSelect"), "HTML should contain the role dropdown");
assert(html.includes("Generate Message"), "HTML should contain the generate button");

assert(js.includes("function generateMessage"), "JavaScript should contain generateMessage function");
assert(js.includes("function toggleTheme"), "JavaScript should contain toggleTheme function");

assert(css.includes(".card"), "CSS should contain card styling");
assert(css.includes(".dark"), "CSS should contain dark theme styling");

console.log("All automated tests passed.");
