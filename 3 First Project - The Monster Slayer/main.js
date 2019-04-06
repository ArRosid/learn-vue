new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true,
            this.playerHealth = 100,
            this.monsterHealth = 100
        },
        attack: function() {
            this.monsterAttack(3,10);
            this.playerAttack(5,12);
        },
        specialAttack: function() {
            this.monsterAttack(10,20);
            this.playerAttack(5,12);
        },
        heal: function() {

        },
        giveUp: function() {

        },
        playerAttack: function(min, max) {
            this.playerHealth -= this.calculateDamage(min,max);
            this.checkWin();
        },
        monsterAttack: function(min, max) {
            this.monsterHealth -= this.calculateDamage(min, max);
            if (this.checkWin()) {
                return;
            }
        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function() {
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('You lost! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
});