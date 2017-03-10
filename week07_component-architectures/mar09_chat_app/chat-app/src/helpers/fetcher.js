export default function fetcher(options) {
  const { method, path, body } = options;
  return fetch(`http://localhost:3001${path}`, {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  });
}
