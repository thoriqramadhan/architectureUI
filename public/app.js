// menu config
const mainMenu = document.getElementById('menu')
const sidenavMain = document.querySelector('.sidenav')
const sidenavButton = document.querySelector('.sidenav-head svg')
const sidenavButtonBg = document.querySelector('.sidenav-head')
const sidenavBody = document.querySelector('.sidenav-body')
const mainSlider = document.getElementById('slider')
const slider = document.querySelectorAll('#slider div')
let sliderCounter = 0

// card config
const cardContainer = document.querySelectorAll('.card-container')
const cardButton = document.querySelectorAll('.card-button span')
const cardDesc = document.querySelectorAll('.card-desc')
const cardImg = document.querySelectorAll('.card-img')


sidenavButton.addEventListener('click',()=>{
    mainSlider.classList.toggle('hidden')
    sidenavBody.classList.toggle('-z-1')
    sidenavBody.classList.toggle('z-10')

    sidenavButtonBg.classList.toggle('bg-slate-400/30')
    sidenavMain.classList.toggle('bg-black')
    sidenavBody.classList.toggle('-translate-x-full')
    sidenavBody.classList.toggle('translate-x-0')
})

function autoSlider(){
    let viewport = Math.floor(window.innerWidth)
    if(sliderCounter < slider.length){
        if(viewport >= 768){
            console.log('md')
            if(slider[sliderCounter].classList.contains('opacity-80')){
                slider[sliderCounter].classList.remove('opacity-80')
                slider[sliderCounter].classList.remove('md:w-10')
                slider[sliderCounter].classList.remove('md:h-[2px]')
                slider[sliderCounter].classList.add('md:w-20')
                slider[sliderCounter].classList.add('md:h-[3px]')
            }
            if(sliderCounter >= 1){
                slider[sliderCounter - 1].classList.remove('opacity-100')
                slider[sliderCounter - 1].classList.remove('md:w-20')
                slider[sliderCounter - 1].classList.remove('md:h-[3px]')
                slider[sliderCounter - 1].classList.add('md:w-10')
                slider[sliderCounter - 1].classList.add('md:h-[2px]')
                slider[sliderCounter - 1].classList.add('opacity-80')
            }
            if(sliderCounter == 0){
                slider[2].classList.remove('opacity-100')
                slider[2].classList.add('opacity-80')
                slider[2].classList.remove('md:w-20')
                slider[2].classList.remove('md:h-[3px]')
                slider[2].classList.add('md:h-[2px]')
                slider[2].classList.add('md:w-10')
            }
        }else{
            console.log('sm')
            if(slider[sliderCounter].classList.contains('opacity-80')){
                slider[sliderCounter].classList.remove('opacity-80')
                slider[sliderCounter].classList.remove('h-10')
                slider[sliderCounter].classList.remove('w-[2px]')
                slider[sliderCounter].classList.add('h-20')
                slider[sliderCounter].classList.add('w-[3px]')
            }
            if(sliderCounter >= 1){
                slider[sliderCounter - 1].classList.remove('opacity-100')
                slider[sliderCounter - 1].classList.remove('h-20')
                slider[sliderCounter - 1].classList.remove('w-[3px]')
                slider[sliderCounter - 1].classList.add('h-10')
                slider[sliderCounter - 1].classList.add('w-[2px]')
                slider[sliderCounter - 1].classList.add('opacity-80')
            }
            if(sliderCounter == 0){
                slider[2].classList.remove('opacity-100')
                slider[2].classList.add('opacity-80')
                slider[2].classList.remove('h-20')
                slider[2].classList.remove('w-[3px]')
                slider[2].classList.add('w-[2px]')
                slider[2].classList.add('h-10')
            }
        }
        sliderCounter++
    }else{
        sliderCounter = 0
    }

    let time = setTimeout(()=>{
        autoSlider()
    },3000)
}

autoSlider()

cardButton.forEach(e =>{
    e.addEventListener('click',()=>{
        const cardContainer = e.closest('.card-container')
        const cardDesc = cardContainer.querySelector('.card-desc')
        const cardImg = cardContainer.querySelector('.card-img')
        
        e.classList.toggle('rotate-180')
        cardDesc.classList.toggle('invisible')
        cardImg.classList.toggle('w-[400px]')
        cardContainer.classList.toggle('w-[240px]')
        cardContainer.classList.toggle('w-[500px]')

    })
})


