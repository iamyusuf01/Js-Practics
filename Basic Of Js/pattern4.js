function pattern(n) {
    for (let row = 1; row <= n; row += 1) {
        let str = "";
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

pattern(4)