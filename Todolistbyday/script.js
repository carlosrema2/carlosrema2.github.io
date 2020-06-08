$(document).ready(function() {

  var test = false;
  var now = moment().format('MMMM Do YYYY');
  var nowHour24 = moment().format('H');
  var nowHour12 = moment().format('h');
  if (test) {
    nowHour24 = 13;
    nowHour12 = 1;
  }

  var dateHeading = $('#navbar-subtitle');
  dateHeading.text(now);
  
  var storedPlans = JSON.parse(localStorage.getItem("storedPlans"));



  if (storedPlans !== null) {
    planTextArr = storedPlans;
  } else {
    planTextArr = new Array(9);
  }

  var plannerDiv = $('#plannerContainer');
 
  plannerDiv.empty();

  for (var hour = 9; hour <= 17; hour++) {

    var index = hour - 9;

    var rowDiv = $('<div>');
    rowDiv.addClass('row');
    rowDiv.addClass('plannerRow');
    rowDiv.attr('hour-index',hour);
  
   
    var col2TimeDiv = $('<div>');
    col2TimeDiv.addClass('col-md-2');
  
    var timeBoxSpn = $('<span>');
  
    timeBoxSpn.attr('class','timeBox');
    
    let displayHour = 0;
    let ampm = "";
    if (hour > 12) { 
      displayHour = hour - 12;
      ampm = "pm";
    } else {
      displayHour = hour;
      ampm = "am";
    }
    
    timeBoxSpn.text(`${displayHour} ${ampm}`);
    
    rowDiv.append(col2TimeDiv);
    col2TimeDiv.append(timeBoxSpn);
 
    var dailyPlanSpn = $('<input>');

    dailyPlanSpn.attr('id',`input-${index}`);
    dailyPlanSpn.attr('hour-index',index);
    dailyPlanSpn.attr('type','text');
    dailyPlanSpn.attr('class','dailyPlan');

  
    dailyPlanSpn.val( planTextArr[index] );
  
    var col9IptDiv = $('<div>');
    col9IptDiv.addClass('col-md-9');

    
    rowDiv.append(col9IptDiv);
    col9IptDiv.append(dailyPlanSpn);
  
    var col1SaveDiv = $('<div>');
    col1SaveDiv.addClass('col-md-1');

    var saveBtn = $('<i>');
    saveBtn.attr('id',`saveid-${index}`);
    saveBtn.attr('save-id',index);
    saveBtn.attr('class',"far fa-save saveIcon");
    
    rowDiv.append(col1SaveDiv);
    col1SaveDiv.append(saveBtn);
  
    updateRowColor(rowDiv, hour);
    
    plannerDiv.append(rowDiv);
  };

  $(document).on('click','i', function(event) {
    event.preventDefault();  

    if (test) { console.log('click pta before '+ planTextArr); }

    var index = $(this).attr('save-id');

    var inputId = '#input-'+index;
    var value = $(inputId).val();

    planTextArr[index] = value;

    // remove shawdow pulse class
    $(`#saveid-${index}`).removeClass('shadowPulse');
    localStorage.setItem("storedPlans", JSON.stringify(planTextArr));
  });  
  
  // function to color save button on change of input
  $(document).on('change','input', function(event) {
    event.preventDefault();  

    // neeed to check for save button

    var i = $(this).attr('hour-index');

    // add shawdow pulse class
    $(`#saveid-${i}`).addClass('shadowPulse');
  });
  
  function updateRowColor (hourRow,hour) { 

    if ( hour < nowHour24) {
      if (test) { console.log("lessThan"); }
      hourRow.css("background-color","lightgrey")
    } else if ( hour > nowHour24) {
      if (test) { console.log("greaterthan"); }
      hourRow.css("background-color","lightgreen")
    } else {
      if (test) { console.log("eqaul"); }
      hourRow.css("background-color","tomato")
    }
  };
});