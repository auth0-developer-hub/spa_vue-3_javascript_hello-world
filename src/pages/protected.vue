<template>
  <div class="content-layout">
    <h1 class="content__title">Protected Page</h1>
    <div class="content__body">
      <p>
        This page retrieves a <strong>protected message</strong> from an
        external API.
        <br />
        <br />
        <strong>Only authenticated users should access this page.</strong>
      </p>
      <CodeSnippet title="Protected Message" :code="message" />
    </div>
  </div>
</template>

<script setup>
import CodeSnippet from "@/components/code-snippet.vue";
import { getProtectedResource } from "@/services/message-service";
import { useAuth0 } from "@auth0/auth0-vue";
import { ref } from "vue";

const message = ref("");

const getMessage = async () => {
  const { getAccessTokenSilently } = useAuth0();
  const accessToken = await getAccessTokenSilently();
  const { data, error } = await getProtectedResource(accessToken);

  if (data) {
    message.value = JSON.stringify(data, null, 2);
  }

  if (error) {
    message.value = error.message;
  }
};

getMessage();
</script>
