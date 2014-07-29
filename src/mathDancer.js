var MathDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

MathDancer.prototype = Object.create(Dancer.prototype);
MathDancer.prototype.constructor = MathDancer;

MathDancer.prototype.step = function(){
  var that = this;
  setTimeout( function() { that.step(); }, that._timeBetweenSteps);

  dancers = window.dancers;
  var dancePartner = [];

  for (var i = 0; i < dancers.length; i++) {
    var top1 = this._top;
    var left1 = this._left;
    var top2 = dancers[i]._top;
    var left2 = dancers[i]._left;
    if (top1 !== top2) {
      var vertical = Math.pow((top1 - top2), 2);
      var horizontal = Math.pow((left1 - left2), 2);

      var distance = Math.sqrt(vertical + horizontal);
      if(dancePartner[0] === undefined){
        dancePartner[0] = dancers[i];
        dancePartner[1] = distance;
      }
      if (distance < dancePartner[1]) {
        dancePartner[0] = dancers[i];
        dancePartner[1] = distance;
      }
    }
  }

  var color = dancePartner[0].$node.css('border-color');
  this.$node.css('border-color', color);
};
