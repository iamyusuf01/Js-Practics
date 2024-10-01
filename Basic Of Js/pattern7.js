function upper(n) {

    for (let row = 1; row <= (n - 1) / 2; row++) {
        let str = "";
        let leftStars = row;
        for (let i = 1; i <= leftStars; i++) {
            str += "*";
        }

        let spaces = n - 2 * row;
        for (let j = 1; j <= spaces; j++) {
            str += " ";
        }

        let rightStars = row;
        for (let k = 1; k <= rightStars; k++) {
            str += "*";
        }
        console.log(str);
    }
}

function middel(n) {
    let str = "";
    for (let row = 1; row <= n; row++) {
        str += "*";
    }
    console.log(str);
}

function lower(n) {

    for (let row = 1; row <= (n - 1) / 2; row++) {
        let str = "";
        let leftStars = ((n - 1) / 2) - row + 1;
        for (let i = 1; i <= leftStars; i++) {
            str += "*";
        }

        let spaces = 2 * row - 1;
        for (let j = 1; j <= spaces; j++) {
            str += " ";
        }

        let rightStars = ((n - 1) / 2) - row + 1;
        for (let k = 1; k <= rightStars; k++) {
            str += "*";
        }
        console.log(str);

    }
}


function butterfly(n){
    upper(n);
    middel(n);
    lower(n);
}

butterfly(5);