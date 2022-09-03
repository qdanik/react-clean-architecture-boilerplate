# Project Scripts

All available scripts for project.

 `npm install` - install dependencies;

## Running Application

* type - web | mobile. Default: web;

 `npm run start:[type]` - run dev server;

 `npm run preview` - run build preview server;

 `npm run build:[web|mobile]` - build target application.

 `npm run build` - build all applications.

 `npm run start:stage` - run dev server with staged ENV config;

## Running Linters

`npm run lint` - check project using eslint and tslint;

`npm run eslint` - check project using eslint;

- `npm run eslint --fix` - fix all possible eslint issues;

`npm run tslint` - check project using tslint.

## Running Tests

`npm run test` - run all project tests;

`npm run test:ci` - run all project tests and collect coverage.

## Running Generators

`npm run generator` - run and follow instructions;
