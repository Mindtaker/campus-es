export function getPosts(userId){
  return fetch(`http://localhost:3333/stories/user/${userId}`)
  .then((data) => data.json());
}

export function setPost(title, content, user){
  return fetch('http://localhost:3333/stories', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, content, user})
  })
    .then(data => data.json())
}