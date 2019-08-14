/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
  mover: function checkKey(e) {
                document.onkeydown = checkKey;
                e = e || window.event;

                if (e.keyCode == '38') {
                    // arriba
                    this.y = this.y -10;
                    this.sprite = 'imagenes/auto_rojo_arriba.png';
                }
                else if (e.keyCode == '40') {
                    // abajo
                    this.y = this.y +10;
                    this.sprite = 'imagenes/auto_rojo_abajo.png';
                }
                else if (e.keyCode == '37') {
                   // izquierda
                   this.x = this.x -10;
                   this.sprite = 'imagenes/auto_rojo_izquierda.png';
                }
                else if (e.keyCode == '39') {
                   // derecha
                   this.x = this.x +10;
                   this.sprite = 'imagenes/auto_rojo_derecha.png';
                }           
            
  },
  perderVidas: function(vida){
    this.vidas  = this.vidas - vida;
  }
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades

}






