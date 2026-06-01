const API_BASE_URL = (process.env.REACT_APP_API_URL || "http://localhost:8000").replace(/\/$/, "");

export const apiRequest = async (path, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload?.message || "Request failed.");
  }

  return payload;
};

export default API_BASE_URL;
