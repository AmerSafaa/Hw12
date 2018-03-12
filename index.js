// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $datetimeInput = document.querySelector("#datetime");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = dcument.querySelector("#shape");
var $searchBtn = document.querySelector("#search");
//var $filterBtn = document.querySelector("#Filter");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);
$filterBtn.addEventListener("click", handleFilterButtonClick);

// Set UFOsighting to data initially
var UFOsighting = data;

// renderTable renders the UFOsighting to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < UFOsighting.length; i++) {
    // Get the current UFO sighting and its fields
    var sighting = UFOsighting[i];
    var fields = Object.keys(sighting);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the sighting object, create a new cell at set its inner text to be the current value at the current sighting's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = sighting[field];
    }
  }
};

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterdatetime = $datetimeInput.value.trim().toLowerCase();
  var  filtercity = $cityInput.value.trim().toLowerCase();
  var filterstate = $stateInput.value.trim().toLowerCase();
  var filtercountry = $countryInput.value.trim().toLowerCase();
  var filtershape = $shapeInput.value.trim().toLower();

  // Set UFOsighting to an array of all sightings whose "datetime" matches the filter
  UFOsighting = adata.filter(function(sighting) {
    var sightingdatetime = sighting.datetime.toLowerCase();
    var sightingcity = sighting.city.substring(0,filtercity.length).toLowerCase();
    var sightingstate = sighting.state.substring(0,filterstate.length).toLowerCase();
    var sightingcountry = sighting.country.substring(0,filtercountry.length).toLowerCase();
    var sightingshape = sighting.shape.substring(0,filtershape.length).toLowerCase();
    if (sightingdatetime === filterdatetime && sightingcity===filtercity && sightingstate===filterstate && sightingcountry===filtercountry && sightingshape===filtershape) {
       return true;
    }
    return false;
  });
  renderTable();
};

// OR Alternate way
// $(function handleFilterButtonClick() {
//  var options = {
//      valueNames: ['datetime', 'city', 'state', 'country', 'shape']
//};

//var userList = new List('search-results', options);
//var activeFilters = [];

//userList.on("updated", function () {
//   $('.sort').each(funtion() {
//      if ($(this).hasClass("asc")) {
//          $(this).fnd(".fa").addClass("fa-sort-asc"), removeClass("fa-sort-descr").show();
//       } else if ($this).hasClass(desc")) {
//          $(this).find("fa").addClass("fa-sort-desc").removeClass("fa-sort-asc").show();
//       } else if ($this).hasClass(desc")) {
//          $(this).find("fa").addClass("fa-sort-desc").removeClass("fa-sort-asc").show();
//       }else if ($this).hasClass(desc")) {
//          $(this).find("fa").addClass("fa-sort-desc").removeClass("fa-sort-asc").show();
//       }
//         else {
//          $(this).find("fa").hide();
//       }
//    })
//});

//filter
//$('.filter').change(function() {
//    var isChecked = this.checked;
//    var value = $(this).data("value");

//    if(isChecked){
//        activeFilters.push(value);
//	}
//    else
//       { 
//        active filters.splice(activeFilters.indexOf(value), 1);
//     }

//    userList.filter(function (item) {
//        if(activeFilters.length > 0)
//         {
//           return(activeFilters.IndexOf(item.values().difficulty)) > -1;
//         }
//         return true;
//    });
//  })
//});

// renderTable();
//};

// Render the table for the first time on page load
renderTable();
