/* Enemigo sera un objeto que tiene las funcionalidades basicas de todo Enemigo
en el juego. Pero no va a existir realmente en nuestro juego. Solo existiran
instancias que tengan de protitipo a este objeto. Por ejemplo, zombies. Si se te
ocurren nuevos enemigos para agregar y queres ser un Hacker, podes hacerlo!

Los parametros que recibe para su construccion son los siguientes:
sprite: contiene la ruta a la imagen que lo representa.
x: posicion x actual del enemigo en el mapa
y: posicion y actual del enemigo en el mapa
ancho: el ancho del enemigo
alto: el alto del enemigo
velocidad: es la velocidad de movimiento, pixeles que podra moverse en cada mov
rangoMov: los limites en el mapa donde se puede mover, sera un diccionario con la
siguiente forma: {desdeX: valor, hastaX: valor, desdeY: valor, hastaY: valor} */

var Enemigo = function (sprite, x, y, ancho, alto, velocidad, rangoMov , desdeX , hastaX , desdeY , hastaY) {
  this.sprite = sprite;
  this.x = x;
  this.y = y;
  this.ancho = ancho;
  this.alto = alto;
  this.velocidad = velocidad;
  this.rangoMov = rangoMov;
  this.desdeX = desdeX;
  this.hastaX = hastaX;
  this.desdeY = desdeY;
  this.hastaY = hastaY;
  this.atacando = false;
  this.mover = function() {
            /* Los movimientos estan basados en un numero aleatorio
            La direccion horizontal es siempre la misma y va ondulando verticalmente.
            Esto hasta llegar a sus limites, donde se invierte su direccion horizontal */
            if (Math.random() < 0.5) {
              this.x -= this.velocidad;
              this.y -= this.velocidad;
            } else {
              //Sino, hace otro movimiento
              this.y += this.velocidad;
              this.x -= this.velocidad;
            }

            /* En esta parte lo que hacemos es invertir la direccion horizontal si
            toca uno de sus limites, modificando su velocidad. Si multiplicamos por -1 la
            velocidad lo que estamos haciendo es invertir su direccion.*/
            if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)){
              this.velocidad *= -1;
            }
            // Si sobrepasa el rangoY, lo manda al centro entre ambos rangos
            if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)) {
              this.y = this.rangoMov.desdeY + (this.rangoMov.hastaY - this.rangoMov.desdeY)/2;
            }
          };
}




/* Por defecto, un enemigo sabe responder al mensaje de atacar
sacando una vida al jugador.*/
Enemigo.prototype.atacar = function (jugador) {
  jugador.perderVidas(1);
}

/* Este metodo sirve para no estar atacando continuamente al jugador. Solo va a
atacar si no estaba atacando previamente. Esto lo va a indicar la propiedad atacando*/
Enemigo.prototype.comenzarAtaque = function (jugador) {
  if (!this.atacando) {
    this.atacar(jugador);
  }
  this.atacando = true;
}
/* Cuando el enemigo no este contacto con el jugador, se utilizara el metodo
dejarDeAtacar para modificar la propiedad atacando*/
Enemigo.prototype.dejarDeAtacar = function () {
  this.atacando = false;
}
