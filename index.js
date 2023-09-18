const cards = document.querySelectorAll('.card')
const bars = document.querySelector('.bar')

document.addEventListener('DOMContentLoaded', () =>{
const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        console.log(entries)
        entry.target.classList.toggle('show', entry.isIntersecting)
    // if(entry.isIntersecting){
    //     observer.unobserve(entry.target)
    // }
    })

})

cards.forEach(card =>{
    observer.observe(card)
})




let array = []


})
})
