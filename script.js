let next = document.querySelector('[for="Next"]')
next.addEventListener('click',() =>{
    arr = [1,2,3]
    for(let i of arr){
        element = document.querySelector(`[for="${i}"]`)
        a = element.getAttribute('href')
        a = Number(element.innerText) + 1
        b = element.setAttribute('href',a)
        element.innerText = Number(element.innerText) + 3
        console.log(element.innerText);
    }
})

let previous = document.querySelector('[for="Previous"]')
previous.addEventListener('click',() =>{
    ar = [1,2,3]
    for(let i of ar){
        ele = document.querySelector(`[for="${i}"]`)
        ele.innerText = Number(ele.innerText)  - 3
        console.log(ele.innerText);
    }
})
