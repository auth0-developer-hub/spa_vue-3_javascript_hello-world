<template>
  <div class="content-layout">
    <h1 class="content__title">Profile</h1>
    <div class="content__body">
      <p>
        <strong>Only authenticated users should access this page.</strong>
      </p>
      <div class="profile-grid">
        <div class="profile__header">
          <img :src="user.picture" alt="Profile" class="profile__avatar" />
          <div class="profile__headline">
            <h2 class="profile__title">{{ user.name }}</h2>
            <span class="profile__description">{{ user.email }}</span>
          </div>
        </div>
        <div class="profile__details">
          <CodeSnippet title="User Profile Object" :code="code" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CodeSnippet from "@/components/code-snippet.vue";
import { useAuth0 } from "@auth0/auth0-vue";

const { user } = useAuth0();

const code = user ? JSON.stringify(user.value, null, 2) : "";
</script>
