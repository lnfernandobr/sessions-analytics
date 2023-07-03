# Sessions Analytics - Tech challenger

## Challenge

[Challenger description](docs/description.md)

## General Description

The goal of this challenger is to implement a new analytics feature called "Sessions Analytics." Given a set of data consisting of individual web page visits and visitor IDs, the objective is to generate a list of sessions for each visitor.

## Preview

![Image preview](images/preview.png)

## local installation

To install this project on your local machine, follow the steps below:

1. Clone the repository from GitHub:
```git
   git clone https://github.com/lnfernandobr/sessions-analytics.git
```
2. Access the project folder:
```bash
cd sessions-analytics
```
3. Install the project's dependencies: (You must use yarn to install all dependencies, including dependencies from packages project)
```bash
yarn install
```
4. To run both the client and the server, you can run the `start` script in the root folder:
```bash
npm run start
```

After following these steps, the server will be available at http://localhost:5000 and the client at http://localhost:3000.

## Stack

**Client:**

- React.JS
- TailwinCSS
- React Router Dom
- React Toastify
- Axios
- Headless UI
- Hero Icons
- React Query
- Date FNS

**Server:**

- Express
- Mongoose (MongoDB)
- Jsonwebtokens
- Jest

**DevOps:**

- Monorepo
- ESlint
- Prettier
