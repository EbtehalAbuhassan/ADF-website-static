function setupListFilter(listContainer, type) {
  const filterSelect = document.getElementById("filter-select");
  const filterField = document.querySelectorAll(".filter__field__input");
  const filterSort = document.querySelector(".filter__sort__icon");
  const listItems = Array.from(
    listContainer.querySelectorAll(`${type === "table" ? "tbody tr:not(.separator)" : "li.list-item"}`)
  );
  let filterOption = filterSelect.value;
  function updateListDisplay() {
    listItems.forEach((item) => {
      const itemValue = item.querySelector(`[data-filter="${filterOption}"]`).textContent.toLowerCase();
      filterField.forEach((ele)=>{
        const shouldDisplay = itemValue.includes(ele.value.toLowerCase());
      shouldDisplay
        ? item.classList.remove("hidden") && item.classList.add("visible")
        : item.classList.add("hidden") && item.classList.remove("visible");
      })

      
    });
    listContainer.dataset.search = Math.floor(Math.random() * 1000000000);
  }

  function sortListItems() {
    listItems.sort((a, b) => {
      const aValue = a.querySelector(`[data-filter="${filterOption}"]`).textContent;
      const bValue = b.querySelector(`[data-filter="${filterOption}"]`).textContent;
      return aValue.localeCompare(bValue);
    });

    listItems.forEach((item) => {
      type === "table" ? listContainer.querySelector("tbody").appendChild(item) : listContainer.appendChild(item);
    });
  }


  filterField.forEach(function(ele) {
    ele.addEventListener("change", function(e) {
      // Your filter logic here for each input field
      filterOption = e.target.value;
      sortListItems();
      filterField.value = "";
      updateListDisplay();
      listContainer.dataset.search = Math.floor(Math.random() * 1000000000);
      // Perform filtering based on the search term
    });
  });

  // filterSelect.addEventListener("change", (e) => {
  //   filterOption = e.target.value;
  //   sortListItems();
  //   filterField.value = "";
  //   updateListDisplay();
  //   listContainer.dataset.search = Math.floor(Math.random() * 1000000000);
  // });
  filterField.forEach(function(ele) {
    ele.addEventListener("keyup", updateListDisplay);
  });
  // filterField.addEventListener("keyup", updateListDisplay);

  filterSort.addEventListener("click", () => {
    filterSort.classList.toggle("asc");
    listItems.reverse();
    listItems.forEach((item) => {
      type === "table" ? listContainer.querySelector("tbody").appendChild(item) : listContainer.appendChild(item);
    });
    listContainer.dataset.search = Math.floor(Math.random() * 1000000000);
  });

  sortListItems();
  updateListDisplay();
}



document.addEventListener('DOMContentLoaded', function() {
  // Get references to the input field and the table body
  const inputField = document.querySelector('.filter__field__input');
  const tableBody = document.querySelector('tbody');

  // Create an event listener for the input field
  inputField.addEventListener('input', function() {
    // Get the search value entered by the user
    const searchValue = inputField.value.trim().toLowerCase();

    // Get all the rows in the table
    const rows = tableBody.querySelectorAll('tr');

    // Loop through the rows and hide/show them based on the search value
    rows.forEach(row => {
      const projectNameCell = row.querySelector('.projectName');

      if (projectNameCell) {
        const projectName = projectNameCell.textContent.trim().toLowerCase();
        if (projectName.includes(searchValue)) {
          row.style.display = ''; // Show the row
        } else {
          row.style.display = 'none'; // Hide the row
        }
      }
    });
  });
});




document.addEventListener('DOMContentLoaded', function() {
  // Get all the filter tabs and the list items
  const filterTabs = document.querySelectorAll('.filter__tabs__tab');
  const listItems = document.querySelectorAll('.form-and-templates__item');

  // Add a click event listener to each filter tab
  filterTabs.forEach(tab => {
    tab.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior

      const filterValue = tab.getAttribute('data-filter'); // Get the data-filter value

      // Loop through the list items and hide/show them based on the filter value
      listItems.forEach(item => {
        const titleElement = item.querySelector('.form-and-templates__item__bottom__content__title');
        if (titleElement && titleElement.getAttribute('data-filter') === filterValue) {
          item.style.display = 'block'; // Show the item
        } else {
          item.style.display = 'none'; // Hide the item
        }
      });

      // Add or remove the 'active' class for the clicked tab
      // filterTabs.forEach(tab => tab.classList.remove('active'));
      // tab.classList.add('active');
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  // Get all filter tabs
  const filterTabs = document.querySelectorAll(".filter__tabs__tab");

  // Get the table rows
  const tableRows = document.querySelectorAll("table tbody tr");
  const tableRowstabs = document.querySelectorAll(".alltabs");
  filterTabs.forEach((tab) => {
    tab.addEventListener("click", function (event) {
      event.preventDefault();
      const filterValue = tab.getAttribute('data-filter');
      


      tableRows.forEach((row) => {
        const titleElement = row.querySelector('.alltabs');
        // console.log(filterValue,2222, titleElement.getAttribute('data-filter'));
        if (titleElement && titleElement.getAttribute('data-filter') === filterValue) {
          row.style.display = ''; // Show the item
        } else {
          row.style.display = 'none'; // Hide the item
        }
      });

      if (filterValue === "") {
        tableRows.forEach((row) => {
          row.style.display = "";
        });
      } else {
        // Show rows that match the selected filter
        // const matchingRows = document.querySelectorAll(`[data-filter="${filterValue}"]`);
        // matchingRows.forEach((row) => {
        //   row.style.display = "";
        // });
      }
    });
  });
});
