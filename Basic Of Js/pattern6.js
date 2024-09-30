function upperTriangle(n) {
    for (let row = 1; row <= n; row += 1) {
        let str = " ";
        let space = n - row;

        for (let j = 1; j <= space; j += 1) {
            str += " ";
        }

        let star = 2 * row - 1;
        for (let col = 1; col <= star; col += 1) {
            str += "*";
        }
        console.log(str);
    }

}

function lowerTriangle(n) {
    for(let i = 0; i <= n; i++) {
        let str= "";
        let space = i;
        for(let j = 0; j <= space; j++) {
            str += " ";
        }
        let stars = 2 * (n - i) - 1;
        for(let k = 1; k <= stars; k++) {
            str += "*";
        }

        console.log(str);
    }
}

function pattern(n){
    upperTriangle(n);
    lowerTriangle(n);
}

pattern(5);