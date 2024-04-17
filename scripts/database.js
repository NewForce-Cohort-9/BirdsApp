const database = {

tableOfBirds: [
{
    id: 1,
    name: "Flapper",
    species: "Penguin",
    battery: "AAA",
    isEnemy: true,
    version: "2.09",
    threatLV: 8

},
{
    id: 2,
    name: "Peter",
    species: "Parakeet",
    battery: "LR44",
    isEnemy: true,
    version: "16.0.01",
    threatLV: 12
},
{
    id: 3,
    name: "Wilber",
    species: "Blue Bird",
    battery: "cr123",
    isEnemy: false,
    version: "1.1",
    threatLV: 0

},
{
    id: 4,
    name: "Dipper",
    species: "Raven",
    battery: "AAA",
    isEnemy: true,
    version: "BigBird 000.12",
    threatLV: 11

}
]

}



export const getBirds = () => {
    return database.tableOfBirds.map(bird => ({...bird}))
}