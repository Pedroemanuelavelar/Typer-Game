const instance = new TypeIt("#typeWrite", {
    speed: 50,
    startDelay: 900,
    afterComplete: function(step, instance) {

        instance.destroy();

    }
})
    .type("tper Game", {delay: 100})
    .move(-8, {speed: 50, delay: 600})
    .type('y')
    .move('START')
    .move(1, {delay: 200})
    .delete(1)
    .type('T')
    .move('END')
    .pause(4000)
    .delete(10, {delay: 600})
    .type('Diversão na digitação', {delay: 6000})
    .delete(null, {delay: 1000})
    .type('Typer Game', {delay: 400})

    
    instance.go();
