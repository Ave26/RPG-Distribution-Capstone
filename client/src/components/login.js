
const username = document.getElementById('username')
const password = document.getElementById('password')
const btnLogin = document.getElementById('btn-login')

// Define your routes
const routes = {
  "/": "home",
  "/products": "products",
  "/about": "about",
};

// Define your route handlers
const handlers = {
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

const loginUser = async (e) => {
  e.preventDefault();
  const user = username.value;
  const pwd = password.value;

  try {
    const data = {
      username: user,
      password: pwd,
    };
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    console.log(json);

    // Clear the username and password fields
    username.value = "";
    password.value = "";

    if (response.status === 200) {
      window.location.href = "/home.html";
      // const path = window.location.pathname;
      // const routeMatch = Object.keys(routes).find((route) =>
      //   path.startsWith(route)
      // );
      // const routeName = routes[routeMatch];
      // handlers[routeName]();
    }
  } catch (e) {
    console.log(e);
  } finally {
    console.log("click");
  }
};

btnLogin.addEventListener("click", (e) => {
  // e.preventDefault(); // prevent the default form submission behavior
  loginUser(e);
});
