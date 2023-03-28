# Storefront Backend Project

## Introduction

This repo contains an angular storefront frontend that connects to the database for communication with a backend api.

## Required Technologies

This application makes use of the following libraries:

- Angular as the building block
- Bootstrap for styling
- Bootstrap icons

## Setup

1. ### Get the project locally

   Clone the project here on github

   ```bash
   git clone https://github.com/edwinmambo/store-frontend-ng.git
   ```

2. ### Install the dependencies

```bash
npm install --global yarn
yarn
```

3. ### Run the application

```bash
yarn start
```

4. ### Run the api

   ```bash
   # In a separate terminal
   yarn watch
   ```

## Usage

The server will run on `localhost:4200/` where the routes will be under the specific endpoints.

## Examples

Products: &nbsp; `http:localhost:4200/products`

cart: &emsp; `http:localhost:4200/cart`

product/:id: &emsp; `http:localhost:4200/products/:id`
