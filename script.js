function click(event){
    console.log(event)

    const shadeDiv = document.createElement('div')
    shadeDiv.className = 'shade'
    
    const eyeDiv = document.createElement('div')
    eyeDiv.className = 'eye'
    shadeDiv.appendChild(eyeDiv)

    const irisDiv = document.createElement('div')
    irisDiv.className = 'iris'
    eyeDiv.appendChild(irisDiv)

    const eyelidDiv = document.createElement('div')
    eyelidDiv.className = 'eyelid'
    eyeDiv.appendChild(eyelidDiv)

    const pupilDiv = document.createElement('div')
    pupilDiv.className = 'pupil'
    irisDiv.appendChild(pupilDiv)

    // const x = Math.floor((window.innerWidth - 115) * Math.random())
    // const y = Math.floor((window.innerHeight - 105)* Math.random())



    shadeDiv.style.position = 'absolute'
    shadeDiv.style.top = event.clientY + 'px'
    shadeDiv.style.left = event.clientX + 'px'

    const sx = Math.max(0.1, Math.random())
    shadeDiv.style.transform = 'translate(-50%, -50%) scale(' + sx + ')' //scale(sx)

    document.body.appendChild(shadeDiv)
}


document.addEventListener('click', click)