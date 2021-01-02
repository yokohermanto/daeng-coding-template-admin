(function($) {
  'use strict';
var dataSet = [
    [ "Name", "System Architect", "Address", "5421", "2011/04/25", "Rp. 10,000,000" ],
    [ "Name", "Accountant", "Address", "8422", "2011/07/25", "Rp. 10,000,000" ],
    [ "Name", "Junior Technical Author", "Address", "1562", "2009/01/12", "Rp. 10,000,000" ],
    [ "Name", "Senior Javascript Developer", "Address", "6224", "2012/03/29", "Rp. 10,000,000" ],
    [ "Name", "Accountant", "Address", "5407", "2008/11/28", "Rp. 10,000,000" ],
    [ "Name", "Integration Specialist", "Address", "4804", "2012/12/02", "Rp. 10,000,000" ],
    [ "Name", "Sales Assistant", "Address", "9608", "2012/08/06", "Rp. 10,000,000" ],
    [ "Name", "Integration Specialist", "Address", "6200", "2010/10/14", "Rp. 10,000,000" ],
    [ "Name", "Javascript Developer", "Address", "2360", "2009/09/15", "Rp. 10,000,000" ],
    [ "Name", "Software Engineer", "Address", "1667", "2008/12/13", "Rp. 10,000,000" ],
    [ "Name", "Office Manager", "Address", "3814", "2008/12/19", "Rp. 10,000,000" ],
    [ "Name", "Support Lead", "Address", "9497", "2013/03/03", "Rp. 10,000,000" ],
    [ "Name", "Regional Director", "Address", "6741", "2008/10/16", "Rp. 10,000,000" ],
    [ "Name", "Senior Marketing Designer", "Address", "3597", "2012/12/18", "Rp. 10,000,000" ],
    [ "Name", "Regional Director", "Address", "1965", "2010/03/17", "Rp. 10,000,000" ],
    [ "Name", "Marketing Designer", "Address", "1581", "2012/11/27", "Rp. 10,000,000" ],
    [ "Name", "Chief Financial Officer (CFO)", "Address", "3059", "2010/06/09", "Rp. 10,000,000" ],
    [ "Name", "Systems Administrator", "Address", "1721", "2009/04/10", "Rp. 10,000,000" ],
    [ "Name", "Software Engineer", "Address", "2558", "2012/10/13", "Rp. 10,000,000" ],
    [ "Name", "Personnel Lead", "Address", "2290", "2012/09/26", "Rp. 10,000,000" ],
    [ "Name", "Development Lead", "Address", "1937", "2011/09/03", "Rp. 10,000,000" ],
    [ "Name", "Chief Marketing Officer (CMO)", "Address", "6154", "2009/06/25", "Rp. 10,000,000" ],
    [ "Name", "Pre-Sales Support", "Address", "8330", "2011/12/12", "Rp. 10,000,000" ],
    [ "Name", "Sales Assistant", "Address", "3023", "2010/09/20", "Rp. 10,000,000" ],
    [ "Name", "Chief Executive Officer (CEO)", "Address", "5797", "2009/10/09", "Rp. 10,000,000" ],
    [ "Name", "Developer", "Address", "8822", "2010/12/22", "Rp. 10,000,000" ],
    [ "Name", "Regional Director", "Address", "9239", "2010/11/14", "Rp. 10,000,000" ],
    [ "Name", "Software Engineer", "Address", "1314", "2011/06/07", "Rp. 10,000,000" ],
    [ "Name", "Chief Operating Officer (COO)", "Address", "2947", "2010/03/11", "Rp. 10,000,000" ],
    [ "Name", "Regional Marketing", "Address", "8899", "2011/08/14", "Rp. 10,000,000" ],
    [ "Name", "Integration Specialist", "Address", "2769", "2011/06/02", "Rp. 10,000,000" ],
    [ "Name", "Developer", "Address", "6832", "2009/10/22", "Rp. 10,000,000" ],
    [ "Name", "Technical Author", "Address", "3606", "2011/05/07", "Rp. 10,000,000" ],
    [ "Name", "Team Leader", "Address", "2860", "2008/10/26", "Rp. 10,000,000" ],
    [ "Name", "Post-Sales support", "Address", "8240", "2011/03/09", "Rp. 10,000,000" ],
    [ "Name", "Marketing Designer", "Address", "5384", "2009/12/09", "Rp. 10,000,000" ]
  ];

  var tableOne = $('#data-table-1').DataTable( {
    data: dataSet,
    columns: [
      { title: "Name" },
      { title: "Position" },
      { title: "Office" },
      { title: "Extn." },
      { title: "Start date" },
      { title: "Salary" }
    ],
  });
  var tableTwo = $('#data-table-2').DataTable( {
    data: dataSet,
    columns: [
      { title: "Name" },
      { title: "Position" },
      { title: "Office" },
      { title: "Extn." },
      { title: "Start date" },
      { title: "Salary" }
    ],
  });
  var tableThree = $('#data-table-3').DataTable( {
    data: dataSet,
    columns: [
      { title: "Name" },
      { title: "Position" },
      { title: "Office" },
      { title: "Extn." },
      { title: "Start date" },
      { title: "Salary" }
    ],
    scrollY: 400
  });
  var tableFour = $('#data-table-4').DataTable( {
    data: dataSet,
    columns: [
      { title: "Name" },
      { title: "Position" },
      { title: "Office" },
      { title: "Extn." },
      { title: "Start date" },
      { title: "Salary" }
    ],
  });
})(jQuery);