<<<<<<< HEAD
=======

>>>>>>> 84e91b9 (Update project)
# To-Do List Application

## Introduction
This is a to-do list application built with Next.js for the frontend and Express.js for the backend. It includes TypeScript for type safety, Tailwind CSS for styling, Zod for data validation, and Prisma ORM for database management.

## Setup Instructions

### Frontend (Next.js)
1. Navigate to the frontend directory:
   
   cd todo-list-frontend
   
2. Install dependencies:
   
   npm install
  
3. Run the development server:
   
   npm run dev
 

### Backend (Express.js)
1. Navigate to the backend directory:
   
   cd todo-list-backend
   
2. Install dependencies:
   
   npm install
   
3. Set up the database:
  
   npx prisma migrate dev --name init
  
4. Run the server:
   
   npm run dev
   

## Usage
1. Open your browser and navigate to `http://localhost:3000` to view the application.
2. Use the UI to add, delete, and manage your to-do items.

## Testing
### Frontend
To run the frontend tests:

cd todo-list-frontend
npm run test


### Backend
To run the backend tests:

cd todo-list-backend
npm run test


## Dependencies
### Frontend
- Next.js
- Tailwind CSS
- Axios
- Jest
- React Testing Library

### Backend
- Express.js
- Prisma
- Zod

## License
This project is licensed under the MIT License.


### Final Review Checklist
1. **Code Review**:
    - Ensure all code is formatted and linted correctly.
    - Remove any unused or commented-out code.
    - Confirm that all functions and components are necessary and efficient.

2. **Functionality Check**:
    - Verify that all CRUD operations work correctly in the frontend.
    - Ensure that API endpoints in the backend are functioning as expected.
    - Run all unit tests to make sure they pass.

<<<<<<< HEAD
=======
3. **Clean Up**:
    - Check for and resolve any remaining warnings or errors in your console.
    - Verify that there are no security vulnerabilities in the dependencies.

### Submit Repository
1. **Push Changes**:
    - Make sure all your changes are committed.
    - Push your changes to the remote repository:
    
    git add .
    git commit -m "Final submission"
    git push origin main
    

2. **Provide Access**:
    - Ensure your repository is public or provide access to your reviewers.

>>>>>>> 84e91b9 (Update project)
