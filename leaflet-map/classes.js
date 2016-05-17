$(document).ready(function(){
  //Class Creator
  class climbingArea{
    constructor(name, north, west){
      this.name = name;
      this.west = north;
      this.north = west;
    }
  }
    //Class Form Submission Values
    $('#form').submit(function(){
    event.preventDefault();
    var yourAreas = [];
    var name = $('#name').val();
    var west = parseInt($('#west').val());
    var north = parseInt($('#north').val());
    const area = new climbingArea(name, north, west)
    yourAreas.push(area)
    console.log(yourAreas)
  })
})
