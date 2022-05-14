# Budget-Manager
Budgetary control to plan your expenses and savings.

#### Content
- <a href="https://github.com/belalmosad/Budget-Manager#technologies-used">Technologies Used.</a>
- <a href="https://github.com/belalmosad/Budget-Manager#how-data-is-storedretrieved-in-this-application">How data is stored/retrieved in this application?</a>
- <a href="https://github.com/belalmosad/Budget-Manager#application-demo">Application Demo</a>
- <a href="https://github.com/belalmosad/Budget-Manager#description-of-data-in-localstorage">Description of data in `localStorage`.</a>
- <a href="https://github.com/belalmosad/Budget-Manager#problems-issues-and-solutions">Problems, Issues, and Solutions.</a>
- <a href="https://github.com/belalmosad/Budget-Manager#todo">TODO.</a>
- <a href="https://github.com/belalmosad/Budget-Manager#ideas-for-future-improvements">Ideas for future improvements.</a>

## Technologies used
- HTML
- CSS
- Vanilla JavaScript

## How data is stored/retrieved in this application?
The application relies on JavaScript's `window` property: `localStorage` as the method of storing/retrieving data.

## Application Demo
### Homepage
<img src="https://github.com/belalmosad/Budget-Manager/blob/main/Assets/Images-for-md/homepage.PNG" width="50%"/><hr>

### Form for adding expense item
<img src="https://github.com/belalmosad/Budget-Manager/blob/main/Assets/Images-for-md/add-item-form.PNG" width="50%"><hr>

### When user tries to add expense that costs more than remaining money.
<img src="https://github.com/belalmosad/Budget-Manager/blob/main/Assets/Images-for-md/no-enough-money.PNG" width="50%">
<hr>

### Data visualisation feature
<img src="https://github.com/belalmosad/Budget-Manager/blob/main/Assets/Images-for-md/data-summary.PNG" width="50%">
<hr>


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


## Problems, Issues, and Solutions

- ### **Problem 1**: How to represent/store/retrieve data?
    - #### **Solution**: By using `localStorage` property as a mock/tiny database. For larger scale app I Would use database instead.

- ### **Problem 2**: How to refer to each expense record for delete/update that *specific* record?
    - #### **Solution**: In the case of using a database, we usually use a primary key as a unique identifier. But in this case (using `localStorage`) I assigned an ID for each item (using `localStorage.nextID` property).

- ### **Problem 3**: When click on the update ✎ button, a new form page should open, how to pass the data of a specific record to the update form page so that the form is filled with the original data to be updated?
    - #### **Solution**: Pass the data of the record in `localStorage` as follows:
        #### In the page that contains all records
        ```
        localStorage.setItem("updateItemData", JSON.stringify(dataArr));
        ``` 
        #### In the update form page
        ```
        localStorage.getItem("updateItemData");
        ```
        Then, after finishing the update process, 
        ```
        localStorage.removeItem("updateItemData");
        ```
- ### **Problem 4**: When trying to add new feature (quantity of each record), I faced alot of problems editing my code .. it was a miss.
    - **Solution**: Realizing that the code was not clean enough to add new feature easily. So, I started learning practices of writing clean code and Design patterns in JavaScript (Not Implemented yet). But as an initial step, I separated dealing with data in a separate interface `DataModel`, and relied on an object `ExpenseItem` instead of just an array.

- ### **Problem 5**: Adding Responsiveness for better Experience in other devices.
    - **Solution**: Using css property `display: flex` and wrapping it in class: `row`, then using it for through the other components.
## TODO
- [x] Implement basic HTML and CSS for home page.
- [x] Implement HTML and CSS for add expense page.
- [x] Implement info legend that contains total budget, total expenses, and remaining budget.
- [x] Implement add one item functionality.
- [x] Implement delete all data.functionality.
- [x] Implement delete single expense item functionality.
- [x] Add constraints on total budget input (non negative real numbers).
- [x] Add edit buttons for each expense record.
- [x] Implement HTML and CSS for Edit single expense item.
- [x] Implement Edit functionality for each expense item.
- [x] Fix bugs with info legend.
- [x] Implement data visualiation feature.
    - [x] First: Build a custom button for openning the visualization page.
    - [x] Second: Add the page of visualisation data.
    - [x] Third: Implement the visualization elements (normal divs bars).
    - [x] Fourth: Add dynamic data to the visualisation elements.
    - [x] Fifth: Animate the divs.
- [x] Implement responsive design for main page.
- [x] Implement responsive design for form page.
- [x] Fix Issue: Responsive Issue when adding long description in data table.
- [x] Implement responsiveness to Edit item form.

## Ideas for future improvements
- Build custom Confirm, prompt, and alert components instead of relying on browser's built-ins.
- Implement pie charts in visualisation section.
- Aggregate each category in one separate table alongside with the main containing table.
