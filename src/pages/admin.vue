<template>
  <div class="content-layout">
    <h1 class="content__title">Admin Page</h1>
    <div class="content__body">
      <p>
        This page retrieves an <strong>admin message</strong> from an external
        API.
        <br />
        <br />
        <strong>
          Only authenticated users with the
          <code>read:admin-messages</code> permission should access this page.
        </strong>
      </p>
      <CodeSnippet title="Admin Message" :code="message" />
    </div>
  </div>
</template>

<script setup>
import CodeSnippet from "@/components/code-snippet.vue";
import { getAdminResource } from "@/services/message-service";
import { ref } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";

const message = ref("");

const getMessage = async () => {
  const { getAccessTokenSilently } = useAuth0();
  const accessToken = await getAccessTokenSilently();
  const { data, error } = await getAdminResource(accessToken);

  if (data) {
    message.value = JSON.stringify(data, null, 2);
  }

  if (error) {
    message.value = error.message;
  }
};

getMessage();
</script>
