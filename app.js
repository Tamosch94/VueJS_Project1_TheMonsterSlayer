new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
		gameIsRunning: false
	},
	// Use computed if you want to call functions
	methods: {
		startGame: function() {
			// Run the game and reset previous play values
			this.gameIsRunning = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
		},
		attack: function() {
			// use a random val  to deal damage
			var attackDamage = this.calculateDamage(5, 10);
			var receivedDamage = this.calculateDamage(10, 20);

			this.monsterHealth -= attackDamage;

			if(this.checkWin()) {
				return;
			}
			this.playerHealth -= receivedDamage;
			this.checkWin();
		},
		specialAttack: function() {

		},
		heal: function() {

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
	}
});
