//BUDGET CONTROLLER
var budgetController = (function () {

  //SOME CODE

})();

//UI CONTROLLER
var UIController = (function () {
  var DOMStrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  };

  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMStrings.inputType).value, // should be inc or exp
        description: document.querySelector(DOMStrings.inputDescription).value,
        value: document.querySelector(DOMStrings.inputValue).value
      };
    },
    getDOMStrings: function () {
      return DOMStrings;
    }
  };

})();

//GLOBAL APP CONTROLLER

var controller = (function (budgetCtrl, UICtrl) {

  var DOM = UICtrl.getDOMStrings();

  var ctrlAddItem = function () {
    //1. Get the field input data
    var input = UICtrl.getInput();
    console.log(input);
    //2. Add the item to the budgetCtrl

    //3. Add the item to the UI

    //4. Calculate budget

    //5, Display the budget on the UI
  };


  document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);


  document.addEventListener('keypress', function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });

})(budgetController, UIController);
