function menu(){
    let choice = 0;
    do{
        choice = +prompt(`
            1.Cộng hai số.
            2.Trừ hai số.
            3.Nhân hai số.
            4.Chia hai số.
            5.Thoát.`);
        switch(choice){
            case 1:
                let n = +prompt("Mời bạn nhập số thứ nhất");
                let m = +prompt("Mời bạn nhập số thứ 2");
                console.log(sum(n,m,choice));
                break;
            case 2:
                let b = +prompt("Mời bạn nhập số thứ nhất");
                let c = +prompt("Mời bạn nhập số thứ 2");
                console.log(sum(b,c,choice));
                break;
            case 3:
                let f = +prompt("Mời bạn nhập số thứ nhất");
                let t = +prompt("Mời bạn nhập số thứ 2");
                console.log(sum(f,t,choice));
                break;
            case 4:
                let k = +prompt("Mời bạn nhập số thứ nhất");
                let l = +prompt("Mời bạn nhập số thứ 2");
                console.log(sum(k,l,choice));
                break;
            case 5:
                
                break;
            default :

                break;

        }

    }while(choice   !==0);
}
menu()
function sum(a,b,c){
    if(c==1){
        return a+b;
    }else if(c ==2){
        return a-b;
    }else if(c ==3){
        return a*b;
    }else if(c ==4){
        return a%b;
    }
}
