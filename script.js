/*
const paintWalls = function () {
    console.log("The wall has been painted red")
}

paintWalls();
*/

/*
const paintWalls = function (colour) {
    console.log("The wall has been painted " + colour);
}

paintWalls("green");
*/

const paintWalls = function (wall, colour) {
    console.log("The " + wall + " has been painted " + colour);
}

paintWalls("north wall", "red");

const kindWall = "south wall";
const colourWall = "green";
paintWalls(kindWall, colourWall);
