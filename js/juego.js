let iconos = [];
let selecciones = [];
let $contador = $("#contador");
let turno = 0;
let conteoJugadas = 0;
let paresDescubiertos = 0;

generarTablero();

function cargarIconos() {
  iconos = [
    '<img src="img/5.jpg" alt="imagen1">',
    '<img src="img/6.jpg" alt="imagen2">',
    '<img src="img/4.jpg" alt="imagen3">',
    '<img src="img/1.jpg" alt="imagen4">',
    '<img src="img/2.jpg" alt="imagen5">',
    '<img src="img/3.jpg" alt="imagen6">',
  ];
}

function generarTablero() {
  variar();
  cargarIconos();
  selecciones = [];
  let tablero = document.getElementById("tablero");
  let tarjetas = [];
  for (let i = 0; i < 12; i++) {
    tarjetas.push(`
                <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
                    <div class="tarjeta" id="tarjeta${i}">
                        <div class="cara trasera" id="trasera${i}">
                            ${iconos[0]}
                        </div>
                        <div class="cara superior">
                            <img src="img/img1.jpg" alt="imagen7">
                            
                        </div>
                    </div>
                </div>        
                `);
    if (i % 2 == 1) {
      iconos.splice(0, 1);
    }
  }
  tarjetas.sort(() => Math.random() - 0.5);
  tablero.innerHTML = tarjetas.join(" ");
}

function seleccionarTarjeta(i) {
  let tarjeta = document.getElementById("tarjeta" + i);
  if (tarjeta.style.transform != "rotateY(180deg)") {
    tarjeta.style.transform = "rotateY(180deg)";
    selecciones.push(i);
  }
  if (selecciones.length == 2) {
    deseleccionar(selecciones);
    selecciones = [];
  }
}

function deseleccionar(selecciones) {
    var correcto = '¡Correcto!';
    var incorrecto = '¡Incorrecto!';
  setTimeout(() => {
    let trasera1 = document.getElementById("trasera" + selecciones[0]);
    let trasera2 = document.getElementById("trasera" + selecciones[1]);
  
    if (trasera1.innerHTML != trasera2.innerHTML) {
      let tarjeta1 = document.getElementById("tarjeta" + selecciones[0]);
      let tarjeta2 = document.getElementById("tarjeta" + selecciones[1]);
      document.getElementById('cont1').innerHTML = incorrecto;
      ocultar();
      turno++
            conteoJugadas++
            $contador = $contador.text('# Jugadas: ' + conteoJugadas);

      tarjeta1.style.transform = "rotateY(0deg)";
      tarjeta2.style.transform = "rotateY(0deg)";
    } else {
      document.getElementById('cont1').innerHTML = correcto;
                ocultar();
                turno++
            conteoJugadas++
            $contador = $contador.text('# Jugadas: ' + conteoJugadas);
    }
  }, 1000);
}

function mostrar() {
  document.getElementById('cont1').style.visibility='visible';
  }
  function ocultar() {
  setTimeout("document.getElementById('cont1').style.visibility='hidden';",1500);
  mostrar();
  }

  //esta función inicia el reloj al cargar la página
function carga(){
  contador_s =0;
  contador_m =0;
      s = document.getElementById("segundos");
      m = document.getElementById("minutos");
          cronometro = setInterval(
                  function(){
                  if(contador_s==60)
                          {
                              contador_s=0;
                              contador_m++;
                              m.innerHTML = contador_m;
                              if(contador_m==60)
                                  {
                                  contador_m=0;
                                  }
                          }
                  s.innerHTML = contador_s;
                      contador_s++;
                  }
              ,1000);
  }

//Esta función detiene el cronómetro
function detenerse(){
     clearInterval(cronometro);
}

function variar(){
  turno = 0;
  paresDescubiertos = 0;
  $contador = $contador.text('# Jugadas: ');
  conteoJugadas = 0;
}