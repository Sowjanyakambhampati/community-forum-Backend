# community-forum-backend

This is the backend for the Community App, a social networking application built using Node.js, Express, and MongoDB. The backend handles Events creation and posts creation,update,deletion also Products creation,update and deletion.


## Installation

1. **Clone the repository:**
   
    git clone https://github.com/Sowjanyakambhampati/BuurtHub
    cd community-forum-backend
   

2. **Install dependencies:**
   
   npm install node
   npm install express
   

4. **Set up environment variables:**
    Create a `.env` file in the root directory and add the following variables:
    
    PORT=5000
     "mongodb+srv://community-forum:0v44NdQ3C3RFLBye@community-forum-cluster.c0vfqhs.mongodb.net/?retryWrites=true&w=majority&appName=community-forum-cluster"

### Environment Variables

| Variable       | Description                                         |
| -------------- | --------------------------------------------------- |
| `PORT`         | 5000       |
| `MONGODB_URI`  |  "mongodb+srv://community-forum:0v44NdQ3C3RFLBye@community-forum-cluster.c0vfqhs.mongodb.net/?retryWrites=true&w=majority&appName=community-forum-cluster"                      |

## Usage

1. **Start the server:**
    
   node app.js
   
   The server will start on `http://localhost:5000`.

## API Endpoints

### Register for the events

router.post("/geoData", GeoAPIController.getGeoData);

router.post("/", fileUploader.single("image"), eventController.createEvent);

router.put("/register", eventController.registerForEvent);

router.get("/", eventController.getAllEvents);

router.get("/city/:city", eventController.getEventsByCity);

router.get("/registeredevents/:registeredId", eventController.getEventsByRegisteredId);

router.get("/:id", eventController.getEventById);

router.put("/", fileUploader.single("image"), eventController.updateEvent);

router.put("/:id", eventController.updateEvent);

router.delete("/", eventController.deleteEvent);

router.delete("/:id", eventController.deleteEvent);

### For products

router.post("/", fileUploader.single("image"), productController.createProduct);

router.get("/", productController.getAllProducts);

router.get("/city/:city", productController.getProductsByCity);

router.get("/:id", productController.getProductById);

router.get("/productowner/:productOwner", productController.getProductsByProductOwner);

router.get("/reservedproducts/:reservedById", productController.getProductsByUserReserved);

router.put("/", fileUploader.single("image"), productController.updateProduct);

router.put("/:id", productController.updateProduct);

router.delete("/", productController.deleteProduct);

router.delete("/:id", productController.deleteProduct);

### For posts

router.post("/", fileUploader.single("image"), postsController.createPost);

router.get("/", postsController.getAllPosts);  

router.get("/city/:city", postsController.getPostsByCity);

router.get("/:id", postsController.getPostById);

router.get("/postauthor/:postAuthor", postsController.getPostsByPostAuthor);

router.put("/", fileUploader.single("image"), postsController.updatePost);

router.put("/:id", postsController.updatePost);

router.delete("/", postsController.deletePost);

router.delete("/:id", postsController.deletePost);

### Authors

@Sowjanya Kambhampati

@Ama Tetsewa

### Demo Link

https://community-forum-backend.adaptable.app




