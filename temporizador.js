function datos(fecha){
    let fechaInicial = new Date()
    const fechaFinal = new Date(fecha)
    // (Fecha_final - Fecha_inicial devuelve  el tiempo de diferencia en Milisegundos.)
    let segundosTotales = (fechaFinal - fechaInicial) / 1000 // 1 segundo = 1000 Milisegundos
    let pseudoHora = (segundosTotales / 3600) // 1 Hora = 3600 Segundos
    let arrayHora = (pseudoHora.toString()).split(".") // creo una nueva variable y convierto el numero a string y aplico Split() para realizar el met. de cadena
    var hora = ("0" + arrayHora[0]).slice(-2)
    let pseudoMinutos = (pseudoHora - hora) * 60
    let arrayMinutos = (pseudoMinutos.toString()).split(".")
    var minutos = ("0" + arrayMinutos[0]).slice(-2)
    let pseudoSegundos = (pseudoMinutos - minutos) * 60
    let segundos = ("0" + Math.floor(pseudoSegundos)).slice(-2)

    return {
        hora,minutos,segundos,segundosTotales
    }
}

function countdown(fecha){
    let horas = document.getElementById("hora")
    let minutos = document.getElementById("minuto")
    let segundos = document.getElementById("segundo")

    const temporizador = setInterval(()=>{
        let t =datos(fecha)
        if (t.segundosTotales < 0) {
            clearInterval(temporizador)
        } else {
            horas.innerHTML = t.hora
            minutos.innerHTML = t.minutos
            segundos.innerHTML = t.segundos
        }

    },1000)
}

countdown('Sun Jan 15 2021 04:07:20 GMT-0300 (hora estándar de Argentina)')





