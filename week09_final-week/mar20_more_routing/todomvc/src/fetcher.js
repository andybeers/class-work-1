export default function fetcher(options) {
  const { method, path, body, token } = options;

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = token;
  }

  return fetch(`http://localhost:3001${path}`, {
    method: method,
    headers: headers,
    body: JSON.stringify(body),
  });
}
