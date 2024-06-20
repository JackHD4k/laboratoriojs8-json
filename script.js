fetch('/datos.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);

    console.log(data.usuarios);

    data.usuarios.forEach(usuario => {
      console.log(`Nombre: ${usuario.nombre}, Edad: ${usuario.edad}`);
    });
  })
  .catch(error => console.error('Error al cargar el archivo JSON:', error));
