/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov,v,h/*, parametro/s extra de ZombieConductor*/) {
  /* Completar constructor a partir de Enemigo */
  //Enemigo.call(/* ... */);
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov , v , h);
  /* No olvidar agregar la/s propiedad/es unicas de ZombieConductor necesarias */
}

/* Completar creacion del ZombieConductor */
ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;

/* Completar metodos para el movimiento y el ataque */

ZombieConductor.prototype.moverTren = function() {
     if (this.sprite == 'imagenes/tren_vertical.png') {
          this.y += 10;          
     }else if(this.sprite == 'imagenes/tren_horizontal.png') {
          this.x += 10;    
     }

     if(this.y == 600){
     	this.y *= -1;
     }else if(this.x == 1000){
     	this.x *= -1;
     }
}




