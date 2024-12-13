let neededArray = [];

tellStory(neededArray);

function tellStory(neededArray) {
    neededArray.push((name1 = prompt("Enter your name")));
    neededArray.push((mood = prompt("Enter your mood")));
    neededArray.push((activity = prompt("Enter your activity")));

    console.log(
        `This is ${neededArray[0]}. ${neededArray[0]} is a nice person. Today they are ${neededArray[1]}. They are ${neededArray[2]} all day. The end.`
    );
}