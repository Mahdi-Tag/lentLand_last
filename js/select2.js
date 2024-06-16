function formatState (state) {
    if (!state.id) {
      return state.text;
    }
    var baseUrl = "/user/pages/images/flags";
    var $state = $(
      '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>'
    );
    return $state;
  };  
  $(".js-example-templating").select2({
    templateResult: formatState
});
$('#mySelect2').select2({
    selectOnClose: true
  });
$('#mySelect2').select2({
    closeOnSelect: false
});