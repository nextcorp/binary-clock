function setHours(h1, h2) {
    const bits1 = document.querySelectorAll(".h .digit:nth-child(1) .bit")
    const bits2 = document.querySelectorAll(".h .digit:nth-child(2) .bit")

    for (let i=0; i<bits1.length; i++) {
        if ((h1 & (2 >> i)) === (2 >> i)) {
            bits1[i].classList.replace("zero", "one")
        } else {
            bits1[i].classList.replace("one", "zero")
        }
    }

    for (let i=0; i<bits2.length; i++) {

        if ((h2 & (8 >> i)) === (8 >> i)) {
            bits2[i].classList.replace("zero", "one")
        } else {
            bits2[i].classList.replace("one", "zero")
        }
        
    }
}

function setMinutes(m1, m2) {
    const bits1 = document.querySelectorAll(".m .digit:nth-child(1) .bit")
    const bits2 = document.querySelectorAll(".m .digit:nth-child(2) .bit")

    for (let i=0; i<bits1.length; i++) {
        if ((m1 & (4 >> i)) === (4 >> i)) {
            bits1[i].classList.replace("zero", "one")
        } else {
            bits1[i].classList.replace("one", "zero")
        }
    }

    for (let i=0; i<bits2.length; i++) {

        if ((m2 & (8 >> i)) === (8 >> i)) {
            bits2[i].classList.replace("zero", "one")
        } else {
            bits2[i].classList.replace("one", "zero")
        }
        
    }
}

function setSeconds(s1, s2) {
    const bits1 = document.querySelectorAll(".s .digit:nth-child(1) .bit")
    const bits2 = document.querySelectorAll(".s .digit:nth-child(2) .bit")

    for (let i=0; i<bits1.length; i++) {
        if ((s1 & (4 >> i)) === (4 >> i)) {
            bits1[i].classList.replace("zero", "one")
        } else {
            bits1[i].classList.replace("one", "zero")
        }
    }

    for (let i=0; i<bits2.length; i++) {

        if ((s2 & (8 >> i)) === (8 >> i)) {
            bits2[i].classList.replace("zero", "one")
        } else {
            bits2[i].classList.replace("one", "zero")
        }
        
    }
}

function setTime() {
    const ctime = new Date()
    
    const h = ctime.getHours()
    const m = ctime.getMinutes()
    const s = ctime.getSeconds()

    const h1 = Math.floor(h / 10)
    const h2 = h % 10

    const m1 = Math.floor(m / 10)
    const m2 = m % 10

    const s1 = Math.floor(s / 10)
    const s2 = s % 10

    setHours(h1, h2)
    setMinutes(m1, m2)
    setSeconds(s1, s2)

    document.querySelector(".time").textContent = `${h1}${h2}:${m1}${m2}:${s1}${s2}`
}

setInterval(setTime, 1000)