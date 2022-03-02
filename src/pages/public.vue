<template>
  <div class="content-layout">
    <h1 class="content__title">Public Page</h1>
    <div class="content__body">
      <p>
        This page retrieves a <strong>public message</strong> from an external
        API.
        <br />
        <br />
        <strong>Any visit can access this page.</strong>
      </p>
      <CodeSnippet title="Public Message" :code="message" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CodeSnippet from "../components/code-snippet.vue";
import { getPublicResource } from "../services/message-service";

const message = ref("");

const getMessage = async () => {
  const { data, error } = await getPublicResource();

  if (data) {
    message.value = JSON.stringify(data, null, 2);
  }

  if (error) {
    message.value = error.message;
  }
};

getMessage();
</script>
