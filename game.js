let W,H, hero

class Hero{
    constructor (div){
        this.div = div
        this.speed_y = 1
        this.grounded = false
    }

    move(){
        if (!this.grounded)
        this.div.style.top = parseInt(window.getComputedStyle(this.div).top) + this.speed_y
    }

    reverse_speed_y(){
        this.speed_y *= -1
    }
}

//сразу после загрузки страницы срабатывает этот код
addEventListener("DOMContentLoaded", function() {
    W = document.activeElement.clientWidth
    H = document.activeElement.clientHeight
    hero_div = document.getElementsByClassName("hero")[0]
    hero = new Hero(hero_div)

    setInterval(move,1)
    addEventListener("mousedown", event_handler)
    addEventListener("touchstart", event_handler)
})

function event_handler(){
    hero.reverse_speed_y()
}

function move(){
    hero.move()
}