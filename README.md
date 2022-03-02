# Vue 3/JavaScript: Single-Page Application Sample

This JavaScript code sample demonstrates how to build a Vue 3 Single-Page Application (SPA).

Visit the ["Vue 3/JavaScript Apps: Security and Identity Management"](https://auth0.com/developers/hub/code-samples/spa/vue-3-javascript) section of the ["Auth0 Developer Hub"](https://auth0.com/developers/hub) to explore how you can secure this Vue 3 application by implementing authentication using Auth0.

[![Security and Identity Management for Vue 3 and JavaScript](https://cdn.auth0.com/blog/hub/code-samples/spa/vue-3-javascript.png)](https://auth0.com/developers/hub/code-samples/spa/vue-3-javascript)

## Run the Project

Install the project dependencies:

```bash
npm install
```

Create a `.env` file under the root project directory and populate it with the following environment variables:

```bash
VITE_API_SERVER_URL=http://localhost:6060
```

Run the application in development mode:

```bash
npm run dev
```

Visit [`http://localhost:4040/`](http://localhost:4040/) to access the starter application.

The starter Vue 3 project offers a functional application that consumes data from an external API to hydrate the user interface. As such, you need to set up and run an API server like the ["Express.js/JavaScript: Basic API Code Sample
"](https://github.com/auth0-developer-hub/api_express_javascript_hello-world/tree/starter).

All the starter Vue 3 application routes are public. However, you can use Auth0 to get an ID token to hydrate the user profile information present in the `/profile` page. With Auth0, you can also get an access token to make a secure call to an external API to hydrate the messages present in the `/protected` and `/admin` pages.
