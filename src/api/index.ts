interface FetchOptions {
  method: string;
  headers: { [key: string]: string };
  body: { username: string; password: string };
}

interface FetchResponse {
  success: boolean;
  message: string;
}

const mockFetch = (
  url: string,
  options: FetchOptions
): Promise<{ json: () => Promise<FetchResponse> }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const mockResponse: FetchResponse = {
        success: true,
        message: "Login successful!",
      };
      const mockError: FetchResponse = {
        success: false,
        message: "Invalid username or password",
      };

      if (
        options.body.username === "admin" &&
        options.body.password === "admin"
      ) {
        resolve({ json: () => Promise.resolve(mockResponse) });
      } else {
        reject({
          json: () => Promise.resolve(mockError),
        });
      }
    }, 2000);
  });
};

export const signInApi = async (
  request: { username: string; password: string },
  options: { onSuccess?: () => void; onError?: (error: string) => void }
) => {
  try {
    const response = await mockFetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: request,
    });

    const result = await response.json();

    if (result.success) {
      options.onSuccess?.();
    } else {
      options.onError?.(result.message);
    }
  } catch (err) {
    const errorResult = await (
      err as { json: () => Promise<FetchResponse> }
    ).json();

    options.onError?.(errorResult.message);
  }
};
