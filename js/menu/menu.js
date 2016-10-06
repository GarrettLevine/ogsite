
//*******************************************************
//                      SLIDEOUT MENU
//*******************************************************
//functions
function slideMenuCheck() {
  if ($(".slideOutMenu").css('display', 'none') ) {
    return true;
  } else {
    return false;
  }
}

var menu = ".slideOutMenu";
var overlay = ".fullsiteWrapper";

function toggleOverlay() {
  $(overlay).toggle();
}

//jquery show
function show(selector) {
  $(selector).show('700', function() {
    toggleOverlay();
  });
}

//jquery hide
function hide(selector) {
  $(selector).hide('700', function() {
      toggleOverlay();
  });
}

//main menu function
$(document).ready( function() {
  //make div appear
  $('.drownDown-menu__button').click( function(e) {
      if (slideMenuCheck() ) {
          show(menu);
      }  
}); //end off click hamburger menu

$(overlay).click(function() {
        hide(menu);
});

  $('.slideOutMenu__listItem').click( function() {

      hide(menu);
  }); //end of click on list item;

  //menu button close/hide
  $('#closeButton').click( function(e) {
      hide(menu);
      
  }); //end of click .closeButton
}); //end of doc ready



