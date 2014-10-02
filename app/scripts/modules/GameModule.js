define(
  ['modules/DeckModule', 'modules/PlayerModule', 'modules/PlayerAiModule', 'gameStates/StateRegistry', 'modules/BoardSingleton'],
  function(Deck, Player, PlayerAi, StateRegistry, Board){

    'use strict';
    function Game(){
      this.$deck = new Deck();
      this.$player1 = new Player('You', 'your');
      this.$player2 = new PlayerAi('Roboto', 'his');
      this.$player1HandVisible = true;
      this.$player2HandVisible = true;
      this.$board = Board.getInstance();
      this.$messages = ['Click the Deck to Start'];
      this.$states = new StateRegistry(this);
      this.$state = this.$states[0];
      this.$forceRender = false;
    }

    Game.prototype.transitionTo = function (stateName, shouldWait) {
      //console.log('active: ' + this.$state.name + ' - transitionTo: ' + stateName);
      if(this.$state.name === stateName){
        this.$forceRender = true;
      }
      this.$await = shouldWait || false;
      this.$state = this.$states.filter(function(state){
        return state.name === stateName;
      })[0];
      if(!this.$state)
        throw new Error('State ' + stateName + ' Not Found');
    };

    return Game;
  });
