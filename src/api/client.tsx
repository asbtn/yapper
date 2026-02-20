const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function apiRequest<ResponseBody>(
  path: string,
  options: RequestInit = {}
): Promise<ResponseBody> {
  const jwt = localStorage.getItem("jwt");

  const url = `${API_BASE_URL}${path}`;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string> | undefined),
  };

  if (jwt) {
    headers.Authorization = `Bearer ${jwt}`;
  }

  const requestOptions: RequestInit = {
    ...options,
    headers,
  };

  const response = await fetch(url, requestOptions);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const data = (await response.json()) as ResponseBody;
  return data;
}
