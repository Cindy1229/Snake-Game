//Apple object Constructor
function Apple () {
  this.x;
  this.y;

  //Set apple position to be random
  this.pickLocation=function () {
    this.x=(Math.floor(Math.random()*columns -1)+1)*scale;
    this.y=(Math.floor(Math.random()*rows -1)+1)*scale;
  }

  this.draw=function() {
    ctx.fillStyle="#e3342f";
    ctx.fillRect(this.x, this.y, scale, scale);
  }
}
