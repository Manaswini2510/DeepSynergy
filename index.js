const inputs = document.querySelectorAll("input[required]")
count = 0
inputs.forEach((eachElement)=>{
    eachElement.id = count
    let element = document.getElementById(count)
    let parentElement = element.parentNode
    let errorElement = document.createElement("p")
    errorElement.id = "para" + count
    
    parentElement.appendChild(errorElement)

    eachElement.addEventListener("blur", (event)=>{
        if(event.target.value === ""){
            const elementId = event.target.id
            const getErrorElement = document.getElementById("para" + elementId)
            getErrorElement.textContent = "Please complete this required field"
            getErrorElement.style.color= "red"
        }
    })
    eachElement.addEventListener("input", (event)=>{
        const elementId = event.target.id
        const getErrorElement = document.getElementById("para" + elementId)
        if(event.target.value === ""){
            getErrorElement.textContent = "Please complete this required field"
            getErrorElement.style.color= "red"
        }else{
            getErrorElement.textContent = ""
        }
    })
    count += 1
})
