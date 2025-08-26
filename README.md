# RESTful API Product Catalog

A simple RESTful API for managing a product catalog, built with Node.js + Express.
The API allows users to add, view, update, and delete products with data stored in memory.

## Features

- Add new products

- View all products

- View product details by ID

- Update existing products

- Delete products

### Input validation:

- name cannot be empty

- price and stock must be ≥ 0

- category must be a string

- UUID for product ID

- JSON responses with consistent structure

## Tech Stack

- Node.js

- Express
- 
## Installation & Setup
### 1. Clone repo
- git clone https://github.com/ImamAlghifary/BACKED_BIZERA_INTERVIEW.git
- cd BACKED_BIZERA_INTERVIEW

### 2. Install dependencies
- npm install

### 3. Run server
- node interview.js


By default, the API runs at:

http://localhost:3000

## API Endpoints
### 1.Add Product

POST /product
<img width="1911" height="1013" alt="image" src="https://github.com/user-attachments/assets/97668301-a883-40a8-845a-a41da6a03884" />

### 2.Get All Products

GET /product

<img width="1910" height="1016" alt="image" src="https://github.com/user-attachments/assets/6c257b16-96d0-4658-9e0d-f66dbba84807" />

### Get Product by ID

GET /product/:id
<img width="1907" height="1018" alt="image" src="https://github.com/user-attachments/assets/61c3d2f2-11f4-43f6-8613-2272b77286f2" />

### Update Product

PUT /product/:id

#### Success:
<img width="1905" height="1014" alt="image" src="https://github.com/user-attachments/assets/ed2ceee0-0dd0-40ce-b585-a70a82223789" />

#### Error:
- Stock or Price < 0
  <img width="1913" height="1021" alt="image" src="https://github.com/user-attachments/assets/cf5f1772-7afe-48dc-aa33-744be229d227" />
- Category is not string
  <img width="1905" height="1016" alt="image" src="https://github.com/user-attachments/assets/018a8674-c08f-43f2-8628-139131eeea14" />

### Delete Product

DELETE /product/:id
<img width="1913" height="1019" alt="image" src="https://github.com/user-attachments/assets/69a68a31-7223-4e28-8e8f-99b4b584dde4" />


