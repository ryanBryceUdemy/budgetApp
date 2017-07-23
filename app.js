//BUDGET CONTROLLER
var budgetController = (function () {

  //SOME CODE

})();

//UI CONTROLLER
var UIController = (function () {

})();

//GLOBAL APP CONTROLLER

var controller = (function (budgetCtrl, UICtrl) {

  var ctrlAddItem = function () {
    //1. Get the field input data

    //2. Add the item to the budgetCtrl

    //3. Add the item to the UI

    //4. Calculate budget

    //5, Display the budget on the UI
    console.log('itworks');
  };


  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);


  document.addEventListener('keypress', function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });

})(budgetController, UIController);
