

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max", "HAS", "PuRple", "dog"];

function findWords() {
    for (let i = 0; i < dog_names.length; i++) {
        let dog_name = dog_names[i];
        if (dog_string.toLowerCase().includes(dog_name.toLowerCase())) {
            console.log(`Matched ${dog_name}`);
        }
    }
}
findWords();

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

/* Given */ arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"]

function replaceEvens(arr) {
    for (let index = 0; index<arr.length;index++)
    {
        if(index%2==0)
        {
            arr.splice(index,1,'even index');
        }
    }
    console.log(arr)
}
replaceEvens(arr);
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]