# [Gaming Community](https://game-community-psi.vercel.app/)

## Description
- Gaming Community is a full-stack application designed to provide gaming enthusiasts with detailed information about games and a platform to join gaming communities. The project is built using **React.js** for the frontend, **Express.js** for the backend, and **MongoDB Atlas** for database management.
---
## Home Page 
![Logo](https://i.ibb.co/dkQ98Fk/homePage.png)
---
## Profile
![Logo](https://i.ibb.co/18hBG87/profile.png)
---

## Features
- Browse detailed information about games.
- Join and interact with gaming communities.
- User authentication and profile management.

---

## Technologies Used
### Frontend
- React.js
- React Router
- Fetch API
- CSS Modules

### Backend
- Express.js
- Node.js
- MongoDB Atlas
- Mongoose
- bcrypt
- cors
- joi
- JWT

---

## API Routes
### Authentication
- `POST /auth/signup` - Register a new user.
- `POST /auth/login` - Log in a user.
- `DELETE /auth/deleteUser` - Delete the profile of the logged-in user.
- `PUT  /auth/updateUser` - Update the profile of the logged-in user.
- `GET  /userDetail` - Fetch the recent logged-in user.
  

### Game Management
- `GET /games` - Fetch all games.

### Community Management
- `GET /community` - Fetch all communities.


### Blog Management
- `GET /blogs`  Fetch all blogs / news.

---

## Prerequisites
- Node.js (v14 or later)
- MongoDB Atlas account
- Git installed
- Browser with developer tools

---

## Getting Started
Follow these steps to pull and run the project on your local device.

### 1. Clone the Repository
```bash
https://github.com/Saurabh5233/Gaming-Community.git
```

### 2. Navigate to the Project Directory
```bash
cd Gaming-Community
```

### 3. Install Dependencies
#### Frontend
```bash
cd frontend
npm install
```
#### Backend
```bash
cd backend
npm install
```

### 4. Set Up Environment Variables
#### Backend
Create a `.env` file in the `backend` directory with the following variables:
```env
MONGO_URI=<Your_MongoDB_Atlas_URI>
PORT=8080
JWT_SECRET=<Your_JWT_Secret>
```

#### Frontend
Create a `.env` file in the `frontend` directory with the following variable:
```env
REACT_APP_BACKEND_URL=http://localhost:8080
```

### 5. Run the Application
#### Backend
```bash
cd backend
npm start
```
#### Frontend
Open a new terminal and run:
```bash
cd frontend
npm start
```

---

## Accessing the Application
Once the backend and frontend servers are running, open your browser and navigate to:
```
http://localhost:5173
```

---

## Folder Structure
```
Gaming-Community/
├── frontend/             # React.js frontend
├── backend/              # Express.js backend
├── README.md             # Project documentation
└── .gitignore            # Ignored files
```

---

## Contributing
- ## Saurabh Shandilya
- ## Ramchandra
- ## Prashant Prasad
- ## Kushang Dhave
We welcome contributions! Feel free to fork the repository and make your contributions. Submit a pull request for review. Ensure your code follows the project's coding guidelines.


