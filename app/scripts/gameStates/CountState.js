define(['jquery','gameStates/BaseState', 'modules/CountScoreKeeper'], function($, BaseState, ScoreKeeper){
  'use strict';
  function CountState(game){
    BaseState.call(this, game, 'Count');
    this.step = 0;
    this.scoreKeeper = new ScoreKeeper();
  }

  CountState.prototype = Object.create(BaseState.prototype);
  CountState.prototype.constructor = CountState;

  CountState.prototype.templates = function(){
    var templates = BaseState.prototype.templates();
    templates.deck =  $('#visibleDeckTemplate').html();
    templates.p2Hand = $('#visibleHandTemplate').html();
    return templates;
  };


  CountState.prototype.init = function(){
    this.p1.restoreHand();
    this.p2.restoreHand();
    var points = 0;
    if(isPlayerOneCribOwner.call(this)){
      evaluatePlayerTwoScore.call(this, points);
    } else {
      evaluatePlayerOneScore.call(this, points);
    }
    this.render();
  };

  CountState.prototype.action = function(){
    console.log(this.step);
    var points = 0;
    if(this.step === 0){
      if(isPlayerOneCribOwner.call(this)){
        evaluatePlayerOneScore.call(this, points);
        this.p2.hand = [];
      } else {
        evaluatePlayerTwoScore.call(this, points);
        this.p1.hand = [];
      }
      points = 0;
      this.step += 1;
      this.render();
    } else if(this.step === 1) {
      this.game.$cribOwner.hand = this.game.$cribOwner.crib;
      this.game.$cribOwner.crib = [];
      this.game.$cribOwner.points += points = this.scoreKeeper.evaluateHand(this.game.$cribOwner, this.game.topCard);
      this.game.$messages = [this.game.$cribOwner.possessive + ' crib scored ' + points + ' points.'];
      this.game.$action = {text: 'Next Round'};
      this.step += 1;
      this.render();
    } else {
      if(isPlayerOneCribOwner.call(this)){
        this.game.$cribOwner = this.p2;
      } else {
        this.game.$cribOwner = this.p1;
      }
      showPlayerOneHand.call(this);
      this.game.$showTopCard = false;
      this.game.$messages = [];
      this.step = 0;
      this.mediator.publish('transition', 'Deal', true);
    }
  };

  function evaluatePlayerOneScore(points){
    showPlayerOneHand.call(this);
    this.p1.points += points = this.scoreKeeper.evaluateHand(this.p1, this.game.topCard);
    this.game.$messages = [this.p1.name + ' scored ' + points + ' points.'];
    return points;
  }

  function evaluatePlayerTwoScore(points){
    showPlayerTwoHand.call(this);
    this.p2.points += points = this.scoreKeeper.evaluateHand(this.p2, this.game.topCard);
    this.game.$messages = [this.p2.name + ' scored ' + points + ' points.'];
    return points;
  }

  function isPlayerOneCribOwner() {
    return this.game.$cribOwner === this.p1;
  }

  function showPlayerOneHand() {
    this.game.$player2HandVisible = false;
    this.game.$player1HandVisible = true;
  }

  function showPlayerTwoHand() {
    this.game.$player2HandVisible = true;
    this.game.$player1HandVisible = false;
  }

  return CountState;
});