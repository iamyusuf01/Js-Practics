// pattern print 1
function pattern(n){
    for(let i = 1; i<=n; i++){
        let srt = "";
        for(let j = 1; j<=n; j++){
            srt += "*";
        }
        console.log(srt);
    }
}

pattern(5);
