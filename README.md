# Budget-Manager
Budgetary control to plan your expenses and savings.

## Technologies used
- HTML
- CSS
- Vanilla JavaScript

## How data is stored/retrieved in this application?
The application relies on JavaScript's `window` property: `localStorage` as the method of storing/retrieving data.

## Description of data in `localStorage`

1. `localStorage.data`: associative array contains all the expenses data displayed in the table. **key** is item ID number, while **value** is an array that contains:
    - Expense category (Grocery, rent, transportation, ..etc).
    - Description.
    - Cost
    - ID number

2. `localStorage.nextID`: numeric value that assigns an ID number for the record.

3. `localStorage.totalBudget`: contains the total budget that the user can spend. The value is entered and edited by the user.

4. `localStorage.totalExpenses`: contains the total value of the expenses, when the user enters an expense item (e.g. car rent that costs 50$), the cost value (i.e. 50$) is added to `localStorage.totalExpenses`.

5. `localStorage.remainingBudget`: contains the left amount of money after adding expenses. This value cannot be negative value, if the user attempts to add an expense item that costs more than the `remainingBudget` value, the item will not be added, and the user will be informed he cannot add these expenses.


## TODO
- [x] Implement basic HTML and CSS for home page.
- [x] Implement HTML and CSS for add expense page.
- [x] Implement info legend that contains total budget, total expenses, and remaining budget.
- [x] Implement add one item functionality.
- [x] Implement delete all data.functionality.
- [x] Implement delete single expense item functionality.
- [ ] Implement HTML and CSS for Edit single expense item.
- [ ] Implement Edit functionality for each expense item.
- [ ] Implement data visualiation feature.

