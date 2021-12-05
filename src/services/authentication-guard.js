import { isAuthenticated, isLoading, login } from "@/services/auth0-plugin";
import { watch } from "vue";

export const authenticationGuard = (to, from, next) => {
  const guardAction = () => {
    if (isAuthenticated.value) {
      return next();
    }

    login({
      appState: {
        targetUrl: to.fullPath,
      },
    });
  };

  if (!isLoading.value) {
    return guardAction();
  }

  watch(isLoading, (currentValue) => {
    if (!currentValue) {
      return guardAction();
    }
  });
};
