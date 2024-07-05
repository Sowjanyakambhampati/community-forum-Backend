# community-forum-backend

This is the backend for the Community App, a social networking application built using Node.js, Express, and MongoDB. The backend handles Events creation and posts creation,update,deletion also Products creation,update and deletion.


## Installation

1. **Clone the repository:**
   
    git clone https://github.com/Sowjanyakambhampati/BuurtHub
    cd community-forum-backend
   

2. **Install dependencies:**
   
  -  npm install node
   - npm install express
   - npm install cloudinary
   

4. **Set up environment variables:**
    Create a `.env` file in the root directory and add the following variables:
    
    PORT=5005
     "mongodb+srv://community-forum:0v44NdQ3C3RFLBye@community-forum-cluster.c0vfqhs.mongodb.net/?retryWrites=true&w=majority&appName=community-forum-cluster"
ORIGIN=http://localhost:3000

### Environment Variables

| Variable       | Description                                         |
| -------------- | --------------------------------------------------- |
| `PORT`         | 5005       |
| `MONGODB_URI`  |  "mongodb+srv://community-forum:0v44NdQ3C3RFLBye@community-forum-cluster.c0vfqhs.mongodb.net/?retryWrites=true&w=majority&appName=community-forum-cluster"                      |

## Usage

1. **Start the server:**
    
   node app.js
   
   The server will start on `http://localhost:5005`.

## API Endpoints

### Register for the events:  Get /event

### For products : Get /products

### For posts : Get /posts



### Authors

- [@Sowjanya Kambhampati](https://github.com/sowjanyakambhampati)

- [@Ama Williams Tetsewa](https://github.com/Tetsewa)

### Demo Link

https://community-forum-backend.adaptable.app

### Support
For support and suggestions, email sowjanyaakella87@gmail.com or amatwilliams@gmail.com.




