# To-Do List App

## Description
This is a simple to-do list application built with Next.js, Express, and MongoDB. Users can add, update, and delete tasks.

## Features
- Add new tasks
- Update existing tasks
- Delete tasks

## Prerequisites
- Node.js (v14 or later)
- MongoDB

## Getting Started

### Backend Setup
1. Navigate to the `todo-list-backend` directory:
    ```sh
    cd todo-list-backend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root of the `todo-list-backend` directory and add your MongoDB connection string:
    ```env
    MONGO_URI=mongodb://localhost:27017/todo-list
    ```

4. Start the backend server:
    ```sh
    npm run dev
    ```

### Frontend Setup
1. Navigate to the `todo-list-frontend` directory:
    ```sh
    cd todo-list-frontend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Start the frontend server:
    ```sh
    npm run dev
    ```

4. Open your browser and go to `http://localhost:3000` to see the application.

## Acknowledgements
- [Tailwind CSS](https://tailwindcss.com/)
- [Next.js](https://nextjs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

## License
This project is licensed under the MIT License.
