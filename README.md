# Architecture

Create Web App use Clean Architecture + React + Mobx.

# Docker

`docker-compose build` - use this command to build or rebuild image

`docker-compose up` - use this command to start app

`docker-compose down` - use this command to halt app

# Available Scripts

In the project directory, you can run:

### `npm install` - use this command to install all dependencies.

### `npm test` - use this command to execute tests.

- --updateSnapshot
  `Description:` Use this flag to re-record every snapshot that fails during this test run.
- --watch
  `Description:` Watch files for changes and rerun tests related to changed files.
- --coverage
  `Description:` Use this flag to receive code coverage stats.

### `npm start` - use this command to run dev server.

- env - one of `[dev, stage, prod, <custom env>]`.
  `Default:` `dev`.
  `Description:` Set the env type to load specific environment arguments `.env.${type}`
  #### `Example: npm start env=stage`
- url - string.
  `Default:` none.
  `Description:` Use this argument to set feature url.
  #### `Example: npm start url=http://feature-url.example.com`
- isDev - boolean.
  `Default:` true.
  `Description:` Use this argument to run project in DEVELOPMENT mode
  #### `Example: npm start isDev`

### `npm lint` - use this command to execute linter.

- --fix - boolean.
  `Default:` none.
  `Description:` Use this flag to fix all eslint issues.

### `npm build` - use this command to build application.

- isDev - boolean.
  `Default:` true.
  `Description:` Use this argument to build project in DEVELOPMENT mode
  #### `Example: npm start isDev`

> Note: You can use `yarn` instead of `npm`

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
  - tests
    [SrcFolderPath]
      [TestFileName].test.ts
      [TestFileName].mock.ts
  - src/
    - containers
      - base/
      - [auth]/
      - [users]/
      - [container-name]/
      - index.ts <- loading all you containers here
    - core/
      - [core features] <- other folders that contain only implementation definition which can be implemented in the adapters or in the other parts (ex. Storage, Http)
      - helpers/
          [name].helper.ts
      - adapters/
        - [adapter-name]/
            [adapter-name].adapter.ts
            [adapter-name].constants.ts?
            [adapter-name].helpers.ts?
            [adapter-name].typings.ts?
      - store/
        - _shared/
            [shared-store-name].store.ts
        - root-store/
            root.store.ts
        - [store-name]/
            [store-name].store.ts
            [store-name].typings.ts
    - data-access/ <- Contain data access implementations
      - [data-access-name]
          [data-access-name].adapter.ts // should implement domain(or other) repository (ex. class [data-access-name] implements [domain-name].repo.ts {})
    - domain/
      - [domain-name]/
        - entities/
            [name].entity.ts <- should contain domain entity
        - repository/
            [name].repo.ts <- should contain interface for the data-access implementation
        - services/
            [name].service.ts <- should implement use-case
        - usecase/
            [name].use-case.ts  <- should contain interface for the service implementation
    - typings/ <- Common Application Types
        [target].d.ts
        global.d.ts
    - ui/
      - components/
        - common/ <- Dumb components
        - [smart-component-name]/ <- Smart component that contains other dumb components
          - [name].components.ts <- Our [Name]Component
          - [name].styles.ts <- All styled components must be declared here
          - [name].typings.ts <- Types or Interfaces must be declared here
      - hooks/
        - did-mount.hook.ts
        - [name].hook.ts
      - hoc/
          - header.hoc.ts
          - [name].hoc.ts
      - ioc <- IoC implementation for the UI Layer
      - modules/
        - [module-name]/ <- Contains a mix of smart and dumb components and has communication with domain layer via presenter
          - [name].presenter.ts <- Place for the logical part to be used by the current module
          - [name].components.ts <- Showing results using own module presenter
          - [name].styles.ts
          - [name].typings.ts
          - [name].constants.ts <- module constant values
          - [name].helpers.ts <- module helpers
      - pages/
        - [page-name]/ <- Contains a mix of modules and has communication with domain layer via presenter
          - [name].presenter.ts
          - [name].components.ts
          - [name].styles.ts
      - routes/
    index.tsx
```

### Namings

`Folder Namings`: Use `kebab-case` format
`File Namings`: Alls files should include target name like (auth) and implementation responsibility like (component, helper, styles) as result we should receive (auth.component.ts, auth.store.ts, auth.styles.ts and etc.)
`Hooks`: Starting with keyword `use` and using format `camelCase` (useSomeHook)
`Constants`: CONSTANT_CASE, SCREAMING_KEBAB_CASE
`Functions, Variables, class Methods or Properties`: camelCase (token, userName, getUser, findUser)
`Classes, Types, Interfaces, Enums`: PascalCase (AuthService, AuthRepository, UserMapper, AppStore)
`Private Properties or Methods`: Starting with `underline` and using format `camelCase` (\_userName, \_email, \_someDataName)

### App Layers

`Domain Layer`: Shouldn't has intersections with UI layer. How we should communicate with Domain? We should include our domain implementations into our Containers and inject these implementations into our components using `useInjection` hook from `IoC`. All containers type must be declared in implementation file using generic `ServiceIdentifier<T>` from containers/typings. (ex. const AuthServiceType: ServiceIdentifier<AuthUseCase> = Symbol('AuthService')) we do not have dependencies on `implementations` like (AuthService or AuthUseCaseImpl), only on the `interfaces` (AuthUseCase).
`Core layer`: Contains main part of application which can will be included in container layer. `Store` also should be included in container as `singleton`.
`Container Layer`: It is 'bridge' between all layers
`UI Layer`: Is responsible for the UI part, for everything that user can see in his browser

- `.husky/` - husky config files.
- `.webpack/` - webpack config files.
- `.jest/` - jest config files.
- `assets/` - assets files here(fonts, images, music, videos and etc.).
- `src/core` - core layer.
- `src/container` - containers(IoC) layer.
- `src/data-access` - data-access layer.
- `src/domain` - business layer.
- `src/mappers` - entity mappers.
- `src/ui` - presentation layer.
- `src/index.tsx` - application entry point.
- `templates/` - html templates.

> Note: All environment variables stored in global variable `ENV_CONFIG`
