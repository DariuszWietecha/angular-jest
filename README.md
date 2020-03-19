# Angular-Jest

## Introduction
Simple Angular 8 WebApp implements CRUD on two models: companies and categories and list companies filtered by categoryId on the home view.

The app was deployed on [https://angular-jest-100.herokuapp.com/](https://angular-jest-100.herokuapp.com/)

Backend for it was implemented in [Express-REST](https://github.com/DariuszWietecha/express-rest) and deployed on [https://express-rest-100.herokuapp.com/](https://express-rest-100.herokuapp.com/).

## Implementation details
Main used dependencies:
- [Angular](https://angular.io/)
- [Bootstrap](https://getbootstrap.com/)
- [Jest](https://jestjs.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://github.com/expressjs/express)

During the implemented was used node v10.16.3.

## Runing the app
### Runing as NodeJS service
1. Install dependencies and build using `npm install`.
2. To change the port to different than 8080: copy `example.env` as `.env` and update PORT variable value as required.
3. Define API URL in `id` attribute of `apibase` tag in `src\index.html` file(`<apibase id="https://express-rest-100.herokuapp.com/">`).
4. Run app using `npm start`.
5. App will be available on [http://localhost:8080](http://localhost:8080)(If port wasn't changed by `.env`).

### Runing the app in the development mode
1. Install dependencies and build using `npm install`.
2. Define API URL in `id` attribute of `apibase` tag in `src\index.html` file(`<apibase id="https://express-rest-100.herokuapp.com/">`).
3. Serve app by `npm run serve`
4. App will be available on [http://localhost:4200](http://localhost:4200).

## Unit tests
#### Unit tests include:
1.  Exemplary standard tests checking content or formatting of elements(src\app\components\app\app.component.spec.ts)
2. Checking instantiating components (all components)
3. Jest Snapshots (all components)
100% unit tests coverage wasn't the target of this project.

#### Runing unit tests:
1. Install dependencies and build using `npm install`.
2. Run unit tests by `npm test`.
3. To check test coverage run `npm test -- --coverage --watchAll`.
4. To run single spec run `jest categories-list.component.spec.ts`. Adding `only` to particular it will let to run one test e.g. `it.only('should create'...`

## Notes
* .vscode directory was committed to the repository to let to debug app - launch Chrome against localhost, with sourcemaps. Steps:
1. Runing the app in the development mode
2. Run `Launch Chrome against localhost, with sourcemaps` debugger task.
3. App will be opened in new Chrome window on [http://localhost:4200](http://localhost:4200) with active breakpoints defined in VSCode.
