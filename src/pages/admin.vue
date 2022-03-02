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
import { ref } from "vue";
import CodeSnippet from "../components/code-snippet.vue";
import { getAdminResource } from "../services/message-service";

const message = ref("");

const getMessage = async () => {
  const { data, error } = await getAdminResource();

  if (data) {
    message.value = JSON.stringify(data, null, 2);
  }

  if (error) {
    message.value = error.message;
  }
};

getMessage();
</script>
