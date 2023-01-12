#!/usr/bin/env node
import ora from "ora";
import inquirer from "inquirer";
import { writeFileSync } from "fs";
import { execSync } from "child_process";
import files from "./files.js";

const main = async () => {
  const { doLint } = await inquirer.prompt({
    message: "Do you want Salvation from Lint Jesus?",
    name: "doLint",
    type: "confirm",
  });

  if (!doLint) process.exit();

  console.log("✨✨✨ Lint Jesus is setting up your files ✨✨✨");
  files.forEach((f) => writeFileSync(f.path, f.content));
  const spinner = ora("Installing Dev Dependencies...").start();
  spinner.color = "yellow";
  execSync(
    "npm i -D eslint@8.31.0 prettier@2.8.2 eslint-config-prettier@8.6.0 husky@8"
  );

  //add scripts
  execSync('npm pkg set scripts.prepare="husky install"');
  execSync('npm pkg set scripts.lint="npx eslint **/*.js"');
  execSync('npm pkg set scripts.lint:fix="npx eslint **/*.js --fix"');
  execSync(
    'npm pkg set scripts.format="npx prettier **/* -w --ignore-unknown"'
  );

  //add husky
  execSync(
    'npm run prepare && npx husky add .husky/pre-commit "npm run format && npm run lint:fix"'
  );

  execSync("npm run format");

  console.log("✨✨✨ All done! Happy Salvation! ✨✨✨");
};

main();
