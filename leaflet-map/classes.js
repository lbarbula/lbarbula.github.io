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
    var name = $('#name').val();
    var west = $('#west').val();
    var north = $('#north').val();
    const area = new climbingArea(name, north, west)
    console.log(area)
  })
})
