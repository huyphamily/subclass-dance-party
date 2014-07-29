var MovingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;

MovingDancer.prototype.step = function(){
  var that = this;
  setTimeout( function() { that.step(); }, that._timeBetweenSteps);

  var vert = Math.floor(Math.random() * 100) ;
  var har = Math.floor(Math.random() * 100);

  if (vert < 50) {
    this._top = 5 + this._top;
  } else if (vert === 0) {
    this._top = 0 + this._top;
  } else {
    this._top = -5 + this._top;
  }

  if (har > 50) {
    this._left = 5 + this._left;
  } else if (har === 0) {
    this._left = 0 + this._left;
  } else {
    this._left = -5 + this._left;
  }

  this.setPosition(this._top, this._left);
  this.$node.css('border-color', 'green');
  //this.setPosition($("body").height() * Math.random(), $("body").width() * Math.random());
};

//0
//0
//$("body").height() * Math.random(),
//$("body").width() * Math.random(),

//$("body").height() = max height
//$("body").width() = max width


//this.$node.css( {} )