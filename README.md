# E-Commerce Back-End Application

This application provides the back-end functionality for an e-commerce platform. It allows users to manage products, categories, and tags using CRUD operations via an API. The application is built with Node.js, Express.js, Sequelize, and PostgreSQL.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Walkthrough Video](#walkthrough-video)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [License](#license)

## Features

- RESTful API for managing products, categories, and tags.
- Database schema creation and seeding.
- CRUD operations for all resources.
- Data persistence via PostgreSQL.
- Tested using Insomnia.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd e-commerce-backend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up your `.env` file with the following variables:

   ```env
   DB_NAME=<database_name>
   DB_USER=<your_username>
   DB_PASSWORD=<your_password>
   DB_HOST=localhost
   DB_DIALECT=postgres
   ```

5. Create the database schema:

   ```bash
   psql -U <your_username> -d <database_name> -f schema.sql
   ```

6. Seed the database:

   ```bash
   npm run seed
   ```

7. Start the server:

   ```bash
   npm start
   ```

## Usage

Use Insomnia (or a similar API client) to test the following endpoints. Ensure the server is running locally at `http://localhost:3001`.

### Walkthrough Video

A walkthrough video demonstrating the application’s functionality is available [here](<link-to-video>).

## API Endpoints

### Categories

- **GET** `/api/categories` — Retrieve all categories.
- **GET** `/api/categories/:id` — Retrieve a single category by its ID.
- **POST** `/api/categories` — Create a new category.
- **PUT** `/api/categories/:id` — Update an existing category.
- **DELETE** `/api/categories/:id` — Delete a category.

### Products

- **GET** `/api/products` — Retrieve all products.
- **GET** `/api/products/:id` — Retrieve a single product by its ID.
- **POST** `/api/products` — Create a new product.
- **PUT** `/api/products/:id` — Update an existing product.
- **DELETE** `/api/products/:id` — Delete a product.

### Tags

- **GET** `/api/tags` — Retrieve all tags.
- **GET** `/api/tags/:id` — Retrieve a single tag by its ID.
- **POST** `/api/tags` — Create a new tag.
- **PUT** `/api/tags/:id` — Update an existing tag.
- **DELETE** `/api/tags/:id` — Delete a tag.

## Technologies Used

- Node.js
- Express.js
- Sequelize
- PostgreSQL
- Insomnia (for testing)

Walkthrough: https://drive.google.com/file/d/1XsQQqzlB3Ekvt6EIo3u7ByuGQYeQ4xKQ/view 