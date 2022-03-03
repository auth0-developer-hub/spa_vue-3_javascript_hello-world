import axios from "axios";
import { ref } from "vue";

export const AccessControlLevel = {
  PUBLIC: "public",
  PROTECTED: "requires-authentication",
  RBAC: "requires-role-permission",
  CORS: "requires-cors-allowed-method",
};

const apiServerUrl = process.env.VUE_APP_API_SERVER_URL;
export const apiEndpoint = ref("");
export const apiResponse = ref("Click a button to make an API request...");
export const selectedAccessControlLevel = ref(null);

const makeRequest = async (options) => {
  try {
    const response = await axios(options.config);
    const { data } = response;

    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data;
    }

    return error.message;
  }
};

export const getPublicResource = async () => {
  selectedAccessControlLevel.value = AccessControlLevel.PUBLIC;

  apiEndpoint.value = "GET /api/messages/public";

  const config = {
    url: `${apiServerUrl}/api/messages/public`,
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  };

  const data = await makeRequest({ config });

  apiResponse.value = JSON.stringify(data, null, 2);
};

export const getProtectedResource = async () => {
  selectedAccessControlLevel.value = AccessControlLevel.PROTECTED;

  apiEndpoint.value = "GET /api/messages/protected";

  const config = {
    url: `${apiServerUrl}/api/messages/protected`,
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  };

  const data = await makeRequest({ config });

  apiResponse.value = JSON.stringify(data, null, 2);
};

export const getRbacResource = async () => {
  selectedAccessControlLevel.value = AccessControlLevel.RBAC;

  apiEndpoint.value = "GET /api/messages/admin";

  const config = {
    url: `${apiServerUrl}/api/messages/admin`,
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  };

  const data = await makeRequest({ config });

  apiResponse.value = JSON.stringify(data, null, 2);
};

export const checkCorsAllowedMethod = async () => {
  selectedAccessControlLevel.value = AccessControlLevel.CORS;

  apiEndpoint.value = "DELETE /api/messages/public";

  const config = {
    url: `${apiServerUrl}/api/messages/public`,
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  };

  const data = await makeRequest({ config });

  apiResponse.value = JSON.stringify(data, null, 2);
};
