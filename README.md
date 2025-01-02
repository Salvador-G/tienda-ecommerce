# MERN E-commerce Project

This project is a virtual store built using the MERN stack (MongoDB, Express, React, Node.js). It features a main view that displays the latest products, as well as sections for viewing products by categories and sizes.

## Project Structure

```
mern-ecommerce
├── backend
│   ├── controllers
│   │   └── productController.js
│   ├── models
│   │   └── productModel.js
│   ├── routes
│   │   └── productRoutes.js
│   ├── config
│   │   └── db.js
│   ├── server.js
│   └── package.json
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── components
│   │   │   └── Product.js
│   │   ├── pages
│   │   │   └── HomePage.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles.css
│   └── package.json
├── .gitignore
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory and install dependencies:
   ```
   cd mern-ecommerce/backend
   npm install
   ```

3. Set up the database connection in `backend/config/db.js` with your MongoDB URI.

4. Start the backend server:
   ```
   npm start
   ```

5. Navigate to the frontend directory and install dependencies:
   ```
   cd ../frontend
   npm install
   ```

6. Start the frontend application:
   ```
   npm start
   ```

## Features

- Display the latest products on the main page.
- Filter products by categories and sizes.
- RESTful API for product management.

## Technologies Used

- MongoDB
- Express.js
- React.js
- Node.js

## License

This project is licensed under the MIT License.