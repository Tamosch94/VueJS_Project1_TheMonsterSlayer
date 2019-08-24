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
		}
	}
});
