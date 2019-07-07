function createTable(tableData) {
  //var table = document.createElement('table');
  //var tableBody = document.createElement('tbody');
  var tableBody = $("#data_target")
  tableBody.empty();

  tableData.forEach(function(rowData) {
    var row = document.createElement('tr');

    rowData.forEach(function(cellData) {
      var cell = document.createElement('td');
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
    });

    tableBody.append(row);
  });

  //table.appendChild(tableBody);
  //document.body.appendChild(table);
}

function update(){
    $.ajax({
      url: "data/table"
    })
  .done(function( data ) {
    if ( console && console.log ) {
      createTable(data.data)
      setTimeout(update, 1000)
    }
  });
}

$(document).ready(function(){
    update()
}())
