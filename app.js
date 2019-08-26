new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
		gameIsRunning: false,
		turns: []
	},
	// Use computed if you want to call functions
	methods: {
		startGame: function() {
			// Run the game and reset previous play values
			this.gameIsRunning = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.turns = []
		},
		attack: function() {
			var damage = this.calculateDamage(5, 10);
			this.monsterHealth -= damage;
			this.turns.unshift({
				isPlayer: true,
				text: 'Player hits monster for ' + damage
			});
			if(this.checkWin()) {
				return;
			}
			this.monsterAttack();
		},
		specialAttack: function() {
			var damage = this.calculateDamage(10, 20);
			this.monsterHealth -= damage;
			this.turns.unshift({
				isPlayer: true,
				text: 'Player hits monster hard for ' + damage
			});
			if(this.checkWin()) {
				return;
			}
			this.monsterAttack();

		},
		heal: function() {
			this.turns.unshift({
				isPlayer: true,
				text: 'Player is healing for 20'
			});
			if (this.playerHealth <= 90) {
				this.playerHealth += 20;
				this.monsterAttack();
			}
			else {
				this.playerHealth = 10;
			}
		},
		endGame: function() {
			this.gameIsRunning = false;
		},
		calculateDamage: function(min, max) {
			// Calculate damaage and return nr.
			return Math.max(Math.floor(Math.random() * max + 1), min);
		},
		checkWin: function() {
			if(this.monsterHealth <= 0) {
				if(confirm('You Won! New Game?')) {
					this.startGame();
				}
				else {
					this.gameIsRunning = false;
				}
				return true;
			}
			else if(this.playerHealth <= 0) {
				if(confirm('You Lost! New Game?')) {
					this.startGame();
				}
				else {
					this.gameIsRunning = false;
				}
				return true;
			}
			return false;

		},
		monsterAttack: function() {
			var damage = this.calculateDamage(10, 20);
			this.playerHealth -= damage;
			this.turns.unshift({
				isPlayer: false,
				text: 'Monster hits Player for ' + damage
			});
			this.checkWin();
		}
	}
});

// Note about VueJS: It really helps you create complex interactions with the dom in an easy way
