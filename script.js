let hamburger = document.querySelector('.hamburgerDiv')
    hamburger.addEventListener('click', () => {
        let header =document.querySelector('.header')
        header.classList.toggle('active')
        let hamLines =document.querySelectorAll('.line')
        hamLines.forEach((line)=>{line.classList.toggle('active')})
        let headerBtn =document.querySelector('.headerList')
        headerBtn.classList.toggle('active')
    })