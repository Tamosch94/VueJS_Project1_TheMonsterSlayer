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
			var min = 5;
			var max = 10;
			var receiveMin = 10
			var receiveMax = 20;
			var attackDamage = Math.max(Math.floor(Math.random() * max + 1), min);
			var receivedDamage = Math.max(Math.floor(Math.random() * receiveMax + 1), receiveMin);
			this.monsterHealth -= attackDamage;

			if (this.monsterHealth <= 0) {
				alert("YOU WON");
				this.gameIsRunning = false;
				this.playerHealth = 100;
				this.monsterHealth = 100;
				return;
			}
			
			this.playerHealth -= receivedDamage;

			if(this.playerHealth <= 0) {
				alert("Game Over, you Loose!!");
				this.gameIsRunning = false;
				this.playerHealth = 100;
				this.monsterHealth = 100;
			}
		},
		specialAttack: function() {

		},
		heal: function() {

		},
		endGame: function() {
			this.gameIsRunning = false;
		}
	}
});
