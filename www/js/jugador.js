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

   mover: function(enX,enY){
     this.x += enX;
     this.y += enY;
   },

   perderVidas: function(cantidadDeVidas){
    this.vidas -= cantidadDeVidas;
   }
}
