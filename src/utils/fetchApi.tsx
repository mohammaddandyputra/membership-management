import errorToastify from "./errorToastify";
import successToastify from "./successToastify";

interface FetchApiOptions {
  token?: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  url: string;
  body?: Record<string, unknown>;
  withoutSwal?: boolean;
  messageSuccess?: string;
}

interface ApiResponse {
  message?: string;
  [key: string]: unknown;
}

const fetchApi = async ({
  token,
  method,
  url,
  body,
  withoutSwal,
  messageSuccess,
}: FetchApiOptions): Promise<ApiResponse> => {
  try {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    };

    const options: RequestInit = {
      method,
      headers,
      ...(body && { body: JSON.stringify(body) }),
    };

    const response = await fetch(url, options);

    if (!response.ok) {
      const errorData: ApiResponse = await response.json();
      const errorMessage = errorData?.message || "Unknown error";
      errorToastify(errorMessage);
      return Promise.reject(new Error(errorMessage));
    }

    const responseData: ApiResponse = await response.json();
    if (!withoutSwal) {
      successToastify(messageSuccess || responseData?.message || "Success");
    }
    return responseData;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "An error occurred"
    );
  }
};

export default fetchApi;
