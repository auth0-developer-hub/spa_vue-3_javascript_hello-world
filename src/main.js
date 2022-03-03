import { createAuth0 } from "@auth0/auth0-vue";
import { createApp } from "vue";
import "./assets/css/styles.css";
import { getRouter } from "./router";
import App from "./app.vue";

const app = createApp(App);

app
  .use(
    createAuth0({
      domain: import.meta.env.VITE_AUTH0_DOMAIN,
      client_id: import.meta.env.VITE_AUTH0_CLIENT_ID,
      audience: import.meta.env.VITE_AUTH0_AUDIENCE,
      redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
    })
  )
  .use(getRouter(app))
  .mount("#root");
