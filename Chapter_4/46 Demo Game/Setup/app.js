new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        //khai báo mảng phần tử
        turns: []

    },
    methods: {
        //Function gọi bên ngoài JS
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function () {
            var max = 10;
            var min = 3;
            var damage = this.calculateDamage(min, max);
            this.monsterHealth -= damage
            //hàm unshift sẽ thêm phần tử vào mảng tại vị trí đầu tiên
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage

            });
            if (this.checkWin()) {
                return;
            }

            this.monsterAttack();

        },
        specialAttack: function () {
            max = 20;
            min = 10;
            damage = this.calculateDamage(min, max);
            this.monsterHealth -= damage;


            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage

            });

            if (this.checkWin()) {
                return;
            }
            this.monsterAttack();
        },
        heal: function () {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            }
            else {
                this.playerHealth = 100;
            }


            this.turns.unshift({
                isPlayer: false,
                text: 'Player heals for 10'

            });

            this.monsterAttack();
        },
        giveUp: function () {

            this.gameIsRunning = false;

        },
        //Functions gọi bên trong JS
        monsterAttack: function () {
            max = 12;
            min = 5;
            damage = this.calculateDamage(min, max);
            this.playerHealth -= damage;
            this.checkWin();

            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage

            });
        }

        ,
        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);

        },
        checkWin: function () {
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New Game?')) {
                    this.startGame();
                }
                else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            else if (this.playerHealth <= 0) {
                if (confirm('You lost! New Game?')) {
                    this.startGame();
                }
                else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }

    }

});
