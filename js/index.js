'use strict';

function ProgressBar(value, max) {
  this.value = value;
  this.max = max;


  this.increment = function() {
    if(this.value < this.max) {
      this.value += 1;
    
    }
  }

  this.decrement = function() {
    if(this.value > 0) {
      this.value -= 1;
    }
  }
}

let progressBar = new ProgressBar(1,20);

function update_html(bar) {
  $('#counter').html(bar.value);
  $('#knob').css('width', bar.value * 5 + '%');
}

$(document).ready(function() {
  update_html(progressBar);

  $('#plus').click(function() {
    progressBar.increment();
    update_html(progressBar);
  });

  $('#minus').click(function() {
    progressBar.decrement();
    update_html(progressBar);
  });
});