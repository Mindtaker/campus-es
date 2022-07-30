export function getUser(email, password) {
  return fetch(`http://localhost:3333/users/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, login: true }),
  }).then((data) => data.json());
}

export function setUser(name, email, password) {
  return fetch(`http://localhost:3333/users/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then((data) => data.json());
}
