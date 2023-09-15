const cards = document.querySelector(".card")

const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        entry.target.classList.toggle('show')
    })
    
})
cards.forEach(card =>{
    observer.observe(card)
})