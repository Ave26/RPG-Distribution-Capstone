// Define your routes
const routes = {
  "/": "home",
  "/products": "products",
  "/about": "about",
};

// Define your route handlers
export const handlers = {
  home: () => {
    console.log("Home page");
  },
  products: () => {
    console.log("Products page");
  },
  about: () => {
    console.log("About page");
  },
};

// Fetch the product data
fetch("https://api.example.com/products")
  .then((response) => response.json())
  .then((data) => {
    // Store the product data somewhere
    // ...

    // Call the appropriate route handler
    const path = window.location.pathname;
    const routeMatch = Object.keys(routes).find((route) =>
      path.startsWith(route)
    );
    const routeName = routes[routeMatch];
    handlers[routeName]();
  })
  .catch((error) => console.error(error));
