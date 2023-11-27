



const baseEndpoint = 'https://api.github.com'; // el nombre de la variable no es muy legible 
const usersEndpoint = `${baseEndpoint}/users`;// esta linea es algo irrelevante para el codigo 
const $n = document.querySelector('#name'); // Cambio en el selector quitando un punto y agrgando #name
const $b = document.querySelector('#blog'); // se borro un punto y se  agrego un # al blog 
const $l = document.querySelector('.location');

async function displayUser(username) {
  $n.textContent = 'cargando...';
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json(); // Se crea una nueva const para poder pasar la respuesta a json
    console.log(data);
    $n.textContent = `${data.name}`;
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`; 
}

displayUser('stolinski').catch(handleError);