# Monster Battle

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint


The Coding Challenge
The app is a battle of monsters, where we have many different monsters with multiple stats like attack and defense, and we can let them fight each other.
The current application displays a list of monsters. We only have the feature of selecting the player's monsters; your job is to implement the missing functionalities.
Goals
Create the monster's card component to visualize the monster's strengths and weaknesses correctly.
Implement the logic to get the computer's monster which should be randomly selected after the player's monster is selected, not allowing it to be the same one as the player; remember that you will select the player's monster by clicking on it.
Once both monsters are selected, the user can “Start Battle," and you must implement the service request and display the battle result correctly.
For "Start Battle" We already have an endpoint ready for it. You don't need to worry about the endpoint implementation or even the logic to calculate the monster's battle.
It is not necessary to create a responsive application for different devices; you can focus only on the web version.



Acceptance Criteria
Implementation matches the design.
The computer monster is randomly selected after selecting the player monster.
The winner's message should be presented after the battle.
Tests pass, and coverage has been added to cover the changes and new implementations.

```
