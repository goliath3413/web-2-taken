var singer1 = {
  firstName: "Jole-Richard",
  lastName: "Hughes",
  genre: "Frenchcore",
};
var singer2 = {
  firstName: "Serj",
  lastName: "Tankian",
  genre: "rock",
};
var singer3 = {
  firstName: "idkwho",
  lastName: "idkwho",
  genre: "idkwhat",
}

var List = [singer1, singer2, singer3];

for (let singer1 of List) console.log(List);


const namen = ["Dirk", "Sandy", "Tormund", "Dahlia"];

for (let i = 0; i < namen.length; i++) {
    // Gebruik de teller i als index van de array
    // Elke iteratie wordt er dus een nieuw element aangesproken
    console.log(namen[i]);
}