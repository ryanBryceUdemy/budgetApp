//BUDGET CONTROLLER
var budgetController = (function () {

  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  //data structure
  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  };
  return {
    addItem: function (type, des, val) {
      var newItem, ID;

      //create new id
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      }else {
        ID = 0;
      }
      //create new item based on 'inc' or 'exp' type
      if (type === 'exp') {
        newItem = new Expense(ID, des, val);
      } else if (type === 'inc') {
        newItem = new Expense(ID, des, val);
      }
      //push item into the data structure
      data.allItems[type].push(newItem);
      //return the new elm
      return newItem;
    },
    tester: function () {
      console.log(data);
    }
  };
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
    addListItem: function () {
      var html;
      //create HTML string with placeholder text
      html = '<div class="item clearfix" id="income-0"><div class="item__description">Salary</div><div class="right clearfix"><div class="item__value">+ 2,100.00</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      //replace the placeholder text with actuall data

      //insert the HTML into the DOM
    },
    getDOMStrings: function () {
      return DOMStrings;
    }
  };

})();

//GLOBAL APP CONTROLLER

var controller = (function (budgetCtrl, UICtrl) {
  var setupEventListeners = function () {
    var DOM = UICtrl.getDOMStrings();
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    document.addEventListener('keypress', function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  var ctrlAddItem = function () {
    //1. Get the field input data
    var input, newItem;
    input = UICtrl.getInput();
    //2. Add the item to the budgetCtrl
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);
    //3. Add the item to the UI

    //4. Calculate budget

    //5, Display the budget on the UI
  };
  return {
    init: function () {
        console.log('app is running');
        setupEventListeners();
    }
  };
})(budgetController, UIController);

controller.init();
