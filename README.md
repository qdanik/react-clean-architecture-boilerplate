
# Architecture

Create Web App use Clean Architecture + React + Mobx. 

# Docker

`docker-compose build` - use this command to build or rebuild image

`docker-compose up` - use this command to start app

`docker-compose down` - use this command to start app

# Available Scripts

In the project directory, you can run:
### `npm install` - use this command to install all dependencies.
### `npm test` - use this command to execute tests.
  * --updateSnapshot
    `Description:` Use this flag to re-record every snapshot that fails during this test run.
  * --watch
    `Description:` Watch files for changes and rerun tests related to changed files.
  * --coverage
    `Description:` Use this flag to receive code coverage stats.
### `npm start` - use this command to run dev server.

  * env - one of `[dev, stage, prod, <custom env>]`. 
      `Default:` `dev`.
      `Description:` Set the env type to load specific environment arguments `.env.${type}`
      #### `Example: npm start env=stage`
  * url - string. 
      `Default:` none.
      `Description:` Use this argument to set feature url.
      #### `Example: npm start url=http://feature-url.example.com`
  * isDev - boolean.
      `Default:` true.
      `Description:` Use this argument to run project in DEVELOPMENT mode
      #### `Example: npm start isDev`

### `npm lint` - use this command to execute linter.
  * --fix - boolean.
    `Default:` none.
    `Description:` Use this flag to fix all eslint issues.

### `npm build` - use this command to build application.
  * isDev - boolean.
      `Default:` true.
      `Description:` Use this argument to build project in DEVELOPMENT mode
      #### `Example: npm start isDev`

>Note: You can use `yarn` instead of `npm`

# Folder Structure
```
  .jest/
    config.ts
    setup.ts
  .webpack/
    - common/
    - helpers/
    constant.ts
    types.ts
    webpack.config.babel.ts
  - assets/
    - fonts
    - images
  - templates/
    index.html
  - src/
    - containers
      - base/
      - [ContainerModule]/
    - core/
      - [core features]
      - helpers/
          [HelperName].ts
      - utils/
          [UtilName].ts
      - adapters/
        - [AdapterName]/
            [AdapterName].ts
            constants.ts?
            helpers.ts?
            types.ts?
      - store/
        - RootStore/
            RootStore.ts
        - [StoreName]/
            [StoreName].ts
        - shared/
            [SharedStoreName].ts
    - data-access/
      - [DomainName]
          [DomainNameRepository]Impl.ts
    - domain/
      - [DomainName]/
        - entities/
            [EntityName].ts
        - repository/
            [RepositoryName]Repository.ts
        - services/
            [ServiceName]Service.ts
        - usecase/
            [UseCaseName]UseCase.ts
    - typings/
        [target].d.ts
        global.d.ts
    - ui/
      - hooks/
      - app/
        - styles/
        [index|app].ts
      - presenters/
        - [ModuleName|PageName]/
          [ModuleName|PageName]Presenter.ts
      - components/
        - common/
        - [AnotherComponents]/
      - modules/
        - [ModuleName]/
      - pages/
        - [PageName]/
      - routes/
    index.tsx
```

* `.webpack/` - webpack config files.
* `.jest/` - jest config files.
* `assets/` - assets files here(fonts, images, music, videos and etc.).
* `src/core` - core layer.
* `src/container` - IoC.
* `src/data-access` - data-access layer.
* `src/domain` - business layer.
* `src/ui` - presentation layer.
* `src/index.tsx` - application entry point.
* `templates/` - templates.

>Note: All environment variables stored in global variable `ENV_CONFIG`
