const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function apiRequest<ResponseBody>(
  path: string,
  options: RequestInit = {},
): Promise<ResponseBody> {
  const jwt = localStorage.getItem('jwt');
  const url = `${API_BASE_URL}${path}`;

  const headers = new Headers(options.headers);

  if (options.body && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  if (!headers.has('Accept')) {
    headers.set('Accept', 'application/json');
  }

  if (jwt) {
    headers.set('Authorization', `Bearer ${jwt}`);
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  const contentType = response.headers.get('content-type') ?? '';
  const hasJsonBody = contentType.includes('application/json');

  if (!response.ok) {
    if (hasJsonBody) {
      const errorBody = await response.json();
      throw errorBody;
    }

    throw new Error(`Request failed with status ${response.status}`);
  }

  if (response.status === 204) {
    return undefined as ResponseBody;
  }

  if (hasJsonBody) {
    return (await response.json()) as ResponseBody;
  }

  return undefined as ResponseBody;
}
