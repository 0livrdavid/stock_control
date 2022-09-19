$(document).ready( function () {
    $('#example').DataTable({
        order: [[1, "asc"]],
        columns: [
            {"data": "0", "bSortable": false, "bSearchable": false},
            {"data": "1"},
            {"data": "2"},
            {"data": "3"},
            {"data": "4"},
            {"data": "5"},
            {"data": "6"},
        ],
        bPaginate: false,
        scrollX: true,
        scrollY: 400,
        responsive: {
            breakpoints: [
              {name: 'bigdesktop', width: Infinity},
              {name: 'meddesktop', width: 1480},
              {name: 'smalldesktop', width: 1280},
              {name: 'medium', width: 1188},
              {name: 'tabletl', width: 1024},
              {name: 'btwtabllandp', width: 848},
              {name: 'tabletp', width: 768},
              {name: 'mobilel', width: 480},
              {name: 'mobilep', width: 320}
            ]
          }
    });
});