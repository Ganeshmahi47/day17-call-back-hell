let a = document.createElement("div")
a.setAttribute("class","conatiner")
let b = document.createElement("div")
b.setAttribute("id","gan")
a.append(b)
let c = document.getElementById("gan")
document.body.append(a)
let NUM = 10;
setTimeout(()=>{
    NUM = NUM
    b.innerHTML = NUM
    setTimeout(()=>{
        NUM = NUM-1
        b.innerHTML = NUM
        setTimeout(()=>{
            NUM = NUM-1
            b.innerHTML = NUM
            setTimeout(()=>{
                NUM = NUM-1
                b.innerHTML = NUM
                setTimeout(()=>{
                    NUM = NUM-1
                    b.innerHTML = NUM
                    setTimeout(()=>{
                        NUM = NUM-1
                        b.innerHTML = NUM
                        setTimeout(()=>{
                            NUM = NUM-1
                            b.innerHTML = NUM
                            setTimeout(()=>{
                                NUM = NUM-1
                                b.innerHTML = NUM
                                setTimeout(()=>{
                                    NUM = NUM-1
                                    b.innerHTML = NUM
                                setTimeout(()=>{
                                    NUM = NUM-1
                                    b.innerHTML = NUM
                                    setTimeout(()=>{
                                        NUM = NUM-1
                                        b.innerHTML = "Happy Independence Day"
                                        
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)
},1000)
