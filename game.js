let W,H, hero

class Hero{
    constructor (div){
        this.div = div
        this.speed_y = 1
        this.grounded = false
    }

    get_top(){
        return parseInt(window.getComputedStyle(this.div).top)
    }

    move(){
        if (!this.grounded)
            this.div.style.top = this.get_top() + this.speed_y
    
        if (this.get_top()<0){
            this.div.style.top = 0
            this.grounded = true
        }

        if (this.get_top()+50>H){
            this.div.style.top = H-50
            this.grounded = true
        }
    }

    jump(){
        if (this.grounded){
            reverse_speed_y(this)
            this.grounded = false
            setTimeout(reverse_speed_y,1000, this)
        }
    }
}

function reverse_speed_y(obj){
    obj.speed_y = obj.speed_y * -1
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
    hero.jump()
}

function move(){
    hero.move()
}