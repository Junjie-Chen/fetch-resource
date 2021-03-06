import fetch from 'node-fetch';

const resource = 'https://jsonplaceholder.typicode.com/albums/1';

const init = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
  mode: 'cors',
  credentials: 'include',
  cache: 'default',
  redirect: 'follow',
  referrerPolicy: 'no-referrer'
};

interface Album {
  id: number;
  title: string;
}

const log = (id: number, title: string) =>
  console.log(`
    The id of the album: ${id}
    The title of the album: ${title}
  `);

fetch(resource, init)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  })
  .then(data => {
    const { id, title } = data as Album;

    log(id, title);
  });
