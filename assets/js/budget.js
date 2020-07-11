////// SELECT ELEMENTS ////////
const balanceEl = document.querySelector(".balance .value");
const incomeTotalEl = document.querySelector(".income-total");
const outcomeTotalEl = document.querySelector(".outcome-total");
const incomeEl = document.querySelector("#income");
const expenseEl = document.querySelector("#expense");
const allEl = document.querySelector("#all");
const incomeList = document.querySelector("#income .list");
const expenseList = document.querySelector("#expense .list");
const allList = document.querySelector("#all .list");
/////  SELECT BUTTONS ////////
const expenseBtn = document.querySelector(".tab1");
const incomeBtn = document.querySelector(".tab2");
const allBtn = document.querySelector(".tab3");
//////   INPUTS AND ADD BUTTONS ///
const addExpense = document.querySelector(".add-expense");
const expenseTitle = document.getElementById("expense-title-input");
const expenseAmount = document.getElementById("expense-amount-input");
const addIncome = document.querySelector(".add-income");
const incomeTitle = document.getElementById("income-title-input");
const incomeAmount = document.getElementById("income-amount-input");
////// VARIABLES //////
let ENTRY_LIST;
let balance = 0, income = 0, outcome = 0;
const DELETE = "delete", EDIT = "edit";
/// LOOK IF THERE IS SAVED DATA IN LOCAL STORAGE
ENTRY_LIST = JSON.parse(localStorage.getItem("entry_list")) || [];
updateUI();
///// LISTEN FOR CLICKS //////
///// SAVE ENTRY TO ENTRY_LIST
///// SAVE ENTRY TO ENTRY_LIST
//// EDIT AND DELETE BUTTONS
//// CALCULATE TOTALS //////
//// CALCULATE BALANCE //////
