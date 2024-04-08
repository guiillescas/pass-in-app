# Pass in app

This is an app to get you into events quickly and easily.

## Requirements

To make sure that you're able to run the project, you must make sure that you have installed in your machine:
- Node.js (version 20 required)
- Android Studio (installed on your pc), iOS simulator (installed on your pc) or Expo Go (installed on your cellphone)

## How do I run the project in my machine?

1. First, clone this repo. Create a folder and run the code bellow in your terminal:

```bash
git clone https://github.com/guiillescas/pass-in-app.git && cd pass-in-app
```

2. Set node version to 20
```bash
nvm use 20
```

3. Install the dependecies, running:
```bash
yarn
```

4. Run the app, running:
```bash
yarn start
```

5. Clone the back-end repo. Create a folder and run the code bellow in your terminal:
```bash
git clone https://github.com/rocketseat-education/nlw-unite-nodejs && cd nlw-unite-nodejs
```

6. Create .env file in the root dir and add the code bellow:
```
DATABASE_URL="file:./db.sqlite"
API_BASE_URL="http://localhost:3333"
PORT="3333"
```

7. Set node version to 20
```bash
nvm use 20
```

8. Install the dependecies, running:
```bash
yarn
```

9. Run the project:
```bash
yarn dev
```
