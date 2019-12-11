(function($) {

  //js selectric
    $('.opt-selectric').selectric({
      
      disableOnMobile: false,
      nativeOnMobile: true
    });
    
  //js select2
    var parentElement = $(".opt-select2");
    
    $('.opt-select2').select2({
      width: null //select2 to take on width of parent
    });

  //date time picker
    $( '#date-start' ).pickadate({
      monthsFull: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
      weekdaysShort: ['min', 'sen', 'sel', 'rab', 'kam', 'jum', 'sab'],
      today: 'hari ini',
      clear: 'bersihkan',
      close: 'tutup',
      formatSubmit: 'yyyy/mm/dd',
      container: '#box-date-start',
      disable: [
        [2019,9,21],
        [2019,9,22],
        [2019,9,23]
      ]
    });
})(jQuery);