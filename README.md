# E-Commerce_Site

This application is an e-commerce back end that uses ORM to interact with a MySQL database. The application has been configured to create an Express.js API that uses Sequelize to interact with a MySQL database.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

To install this application, you will need to have Node.js and MySQL installed on your local machine.

1. Clone the repository from GitHub onto your local machine.
2. Navigate to the root directory of the application in your terminal.
3. Run `npm install` to install the necessary dependencies.
4. Create a new `.env` file based on the `.env.EXAMPLE` file and fill in the appropriate MySQL credentials.
5. Open MySQL shell and run `source db/schema.sql` to create the database.
6. Run `npm run seed` to seed the database with test data.

## Usage

To start the server, run `npm start` in your terminal. This will start the Express.js server and connect to the MySQL database. You can then use a tool like [Insomnia](https://insomnia.rest/) to test the API endpoints.

The following API routes are available:

### Categories

- `GET /api/categories`: Get all categories
- `GET /api/categories/:id`: Get a single category by ID
- `POST /api/categories`: Create a new category
- `PUT /api/categories/:id`: Update a category by ID
- `DELETE /api/categories/:id`: Delete a category by ID

### Products

- `GET /api/products`: Get all products
- `GET /api/products/:id`: Get a single product by ID
- `POST /api/products`: Create a new product
- `PUT /api/products/:id`: Update a product by ID
- `DELETE /api/products/:id`: Delete a product by ID

### Tags

- `GET /api/tags`: Get all tags
- `GET /api/tags/:id`: Get a single tag by ID
- `POST /api/tags`: Create a new tag
- `PUT /api/tags/:id`: Update a tag by ID
- `DELETE /api/tags/:id`: Delete a tag by ID

## Demo

A walkthrough video demonstrating the functionality of the application can be found [here](https://drive.google.com/file/d/1gpQrl7_RhRWZo1AncE_GAzldAUlFnlhd/view?usp=share_link).

## Contributing

This repository is not open for contribution. However, if you find any bugs or have suggestions for improvement, feel free to open an issue on GitHub.

## Questions

If you have any questions about this application, feel free to contact me through [stephen-castillo](https://github.com/stephen-castillo/E-Commerce_Site) or [via email](mailto:someone@example.com).