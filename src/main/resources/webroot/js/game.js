// Generated by CoffeeScript 1.12.4
var Player, eb,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Config.title = ['MEMLEAK', "HUNT"];

eb = new EventBus("http://" + window.location.host + "/eventbus");

eb.onopen = function() {
  return eb.send('memleak-hunt', {
    action: 'join',
    playerId: playerId
  });
};

window.begin = function() {
  return new Player();
};

Player = (function(superClass) {
  extend(Player, superClass);

  function Player() {
    return Player.__super__.constructor.apply(this, arguments);
  }

  Player.prototype.update = function() {
    this.pos.setValue(Mouse.pos);
    if (Mouse.isPressing) {
      return eb.send('memleak-hunt', {
        action: 'shoot',
        playerId: playerId,
        x: this.pos.x,
        y: this.pos.y
      });
    }
  };

  return Player;

})(Actor);
