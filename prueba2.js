const calcularDistancia = (c, p)=>{
    let movimientosTotales
    movimientosTotales = Math.abs(c[0] - p[0]) + Math.abs(c[1] - p[1])
    return movimientosTotales
}

const gps = (conductor, pasajeroA, pasajeroB) => {

    const A = calcularDistancia(conductor, pasajeroA)
    const B = calcularDistancia(conductor, pasajeroB)

    if(A<B) console.log('El pasajero mas cercano es A')
    else if (A>B) console.log('el pasajero mas cercano es B')
    else console.log('los pasajeros estan a la misma distancia')

}

gps([1,1], [4,3], [2,3])