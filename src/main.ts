
const wrapper: HTMLElement = document.getElementById("wrapper")!
const button: HTMLButtonElement = document.querySelector("#button")!

console.log(wrapper)
console.log(button)

let counter = 0; 

button.addEventListener('click', function(){
    ++counter;

    let rColor: string = `#${Math.random().toString(16).substr(-6)}`
    button.style.border = `2px solid ${rColor}`

    if (counter % 2 != 0){
        wrapper.style.border = `2px solid ${rColor}`
        wrapper.style.boxShadow = 
        `inset -5px -2px 120px ${rColor}`
        wrapper.style.background = "rgba(255,255,255,0.3)"
        wrapper.style.borderRadius = "50%"
        wrapper.style.padding = "0px 0px"
    }
    else {
        button.style.borderColor = "#fff"
        wrapper.style.borderRadius = "0%"
        wrapper.style.padding = "40px 40px"
        wrapper.style.boxShadow = `inset -1px -2px 30px rgba(255,255,255,0.9)`
        wrapper.style.border = "none";
    }

})