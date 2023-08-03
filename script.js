document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    var username = document.getElementsByName('username')[0].value;
    var password = document.getElementsByName('password')[0].value;

    // Check username and password
    if (username === 'dataknights' && password === '123') {
        // Redirect to another HTML page
        window.location.href = 'dashboard.html';
    } else {
        // Display error message or perform other actions
        console.log('Invalid username or password');
    }
});



function openNav() {
    document.getElementById("mySidepanel").style.width = "220px";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

// Close the sidebar when clicking outside of it
window.addEventListener('click', function(event) {
    if (!event.target.matches('.openbtn') && !event.target.closest('.sidepanel'))   {
        closeNav();
    }
});

function togglePopup() {
    var popup = document.getElementById("popup");
    if (popup.style.display === "none") {
      popup.style.display = "block";
    } else {
      popup.style.display = "none";
    }
  }
  
  function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
  }
  
  function saveTransaction() {
    // Add code here to handle saving the transaction data
    // For example, you can retrieve the transaction name using:
    // var transactionName = document.getElementById("transaction-name").value;
  
    // After saving, you may want to close the popup:
    closePopup();
  }

  function toggleCategoryPopup() {
    var categoryPopup = document.getElementById("categoryPopup");
    if (categoryPopup.style.display === "none") {
      categoryPopup.style.display = "block";
    } else {
      categoryPopup.style.display = "none";
    }
  }
  
  function closeCategoryPopup() {
    var categoryPopup = document.getElementById("categoryPopup");
    categoryPopup.style.display = "none";
  }
  
  function saveCategory() {
    // Add code here to handle saving the category data
    // For example, you can retrieve the category name using:
    // var categoryName = document.getElementById("category-name").value;
  
    // After saving, you may want to close the popup:
    closeCategoryPopup();
  }

  function redirectToPage(url) {
    window.location.href = url;
  }


 

  function toggleDropdown() {
    var dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  function toggleDropdown() {
    var dropdown = document.getElementById("dropdown");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  }
  
  // Close the dropdown if the user clicks outside of it
  window.addEventListener("click", function (event) {
    if (!event.target.matches(".main-button")) {
      var dropdown = document.getElementById("dropdown");
      if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
      }
    }
  });
  