const pantufla = () => {
    for (let i = 1; i <= 100; i++) {

        if (i % 2 == 0 && i % 3 == 0) console.log("fla"); 

        else if (i % 2 == 0) console.log("pan"); 

        else if (i % 3 == 0) console.log("tu");

        else console.log(i);
    }
}

console.log(pantufla())