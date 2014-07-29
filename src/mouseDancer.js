var MouseDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

MouseDancer.prototype = Object.create(Dancer.prototype);
MouseDancer.prototype.constructor = MouseDancer;

MouseDancer.prototype.step = function(){
  var that = this;
  setTimeout( function() { that.step(); }, that._timeBetweenSteps);

  this.$node.css('border-color', 'purple');
  $('body').mousemove(function(e) {
    that._top = e.clientY;
    that._left = e.clientX;
    that.setPosition(that._top, that._left);
  });
};

