function token(){
    let capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let small = "abcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
    let total = capital + small + num;

    let res = "";
    for(let a=0;a<16;a++){
        let random  = Math.floor(Math.random()* total.length);
        res += total[random];
        console.log(random);
    }
    // alert(res);
    console.log(res);
    console.log("hfhfhf");
    console.log(total);


}

token();