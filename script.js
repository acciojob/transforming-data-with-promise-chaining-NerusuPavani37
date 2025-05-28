//your JS code here. If required.
let btn = document.getElementById("btn");
let output = document.getElementById("output");

function promise1(num){
    return new Promise((resolve)=>{
      setTimeout(()=>{
         resolve(num)
      },2000)
    })
}

function promise2(num){
    return new Promise((resolve)=>{
      setTimeout(()=>{
         resolve(num*2)
      },2000)
    })
}

function promise3(num){
    return new Promise((resolve)=>{
      setTimeout(()=>{
         resolve(num-3)
      },1000)
    })
}

function promise4(num){
    return new Promise((resolve)=>{
      setTimeout(()=>{
         resolve(num/2)
      },1000)
    })
}

function promise5(num){
    return new Promise((resolve)=>{
      setTimeout(()=>{
         resolve(num+3)
      },1000)
    })
}

btn.addEventListener("click", ()=>{
  let num = Number(document.getElementById("ip").value);
  promise1(num)
  .then((res1)=>{
    output.innerHTML += `<p>Result: ${res1}</p>`
    return promise2(res1)
  })
  .then((res2)=>{
    output.innerHTML += `<p>Result: ${res2}</p>`
    return promise3(res2)
  })
  .then((res3) =>{
    output.innerHTML += `<p>Result: ${res3}</p>`
    return promise4(res3)
  })
  .then((res4)=>{
    output.innerHTML += `<p>Result: ${res4}</p>`
    return promise5(res4)
  })
  .then((res5)=>{
    output.innerHTML += `<p>Result: ${res5}</p>`
  })
  .catch((err)=>{
    output.innerHTML += `<p>Result: ${err}</p>`
  })
})
