
interface Player {
    name: string;
    nummer: number;
}



var array: Player[] = [
    {
        name: "Harit",
        nummer: 25
    },
    {
        name: "Caligiuri",
        nummer: 18
    }
    {
        name: "Raman",
        nummer: 9
    }

];

window.alert(array[0].name + " spielt momentan sehr gut aber " + array[2].name + " sogar noch besser!");