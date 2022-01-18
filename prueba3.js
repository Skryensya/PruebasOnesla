const carrera = (liebreA, Va, liebreB, Vb) =>{
    let distancia = 1000
    for(let i = 0; i <= distancia; i++){
        if(liebreA === liebreB){
            console.log(`Ambas liebres se encuentran en el cuadrante ${liebreA} luego de ${i} saltos`)
            break
        }else{
            liebreA += Va
            liebreB += Vb
        }
        if(i === distancia){
            console.log(`las liebres no se lograron alcanzar antes de finalizar la carrera`)
        }
    }
}

carrera(1, 4, 5, 2)

