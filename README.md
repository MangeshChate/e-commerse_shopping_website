
# Next.js E-commerce Shopping Website

This is an e-commerce shopping website built with Next.js. It uses TypeScript, Redux for state management, and Clerk for authentication. A dummy API is used for demonstration purposes.


## Features

- **Next.js** for server-side rendering and routing.
- **TypeScript** for type safety.
- **Redux** for state management.
- **Clerk** for user authentication.
- **Dummy API** for fetching product data.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/nextjs-ecommerce.git
   cd nextjs-ecommerce
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up Clerk for authentication:**
   - Create an account at [Clerk](https://clerk.dev/).
   - Obtain your Clerk frontend API key and secret key.
   - Create a `.env.local` file in the root directory and add the following:
     ```bash
     NEXT_PUBLIC_CLERK_FRONTEND_API_KEY=your_frontend_api_key
     CLERK_API_KEY=your_secret_key
     ```

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

- **Home Page:** Displays a list of products fetched from the dummy API.
- **Product Page:** Shows detailed information about a selected product.
- **Cart:** Allows users to add and remove products from the shopping cart.
- **Authentication:** Users can sign up, log in, and log out using Clerk.

## Folder Structure

```
nextjs-ecommerce/
├── components/        # Reusable UI components
├── pages/             # Next.js pages
│   ├── _app.tsx       # Custom App component for initializing pages
│   ├── index.tsx      # Home page
│   ├── product/       # Product-related pages
│   └── auth/          # Authentication-related pages
├── redux/             # Redux store and slices
│   ├── store.ts       # Store configuration
│   └── slices/        # Redux slices for state management
├── styles/            # CSS styles
├── utils/             # Utility functions
└── public/            # Static assets
```

