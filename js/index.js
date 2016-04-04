(function() {
  var mainList = $('.subData'),
    selectedList = [],
    excludedList = [];

  var generateHash = function() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
  }

  $('.mainSection li.subData').each(function() {
    var hashId = generateHash();
    $(this).attr('id', hashId);
  });

  var checkboxes = '<span class="checkbox include"><i class="fa fa-circle-o" 		style="color: green;font-size: 13px;"></i></span><span class="checkbox exclude"><i class="fa fa-circle-o" style="color: red;font-size: 13px;"></i></span>';

  $('.subData').prepend('' + checkboxes);

  $('.include').bind('click', function() {
      var targetLi = this.closest('li'),
        elementInSelectedList = selectedList.indexOf(targetLi.id),
        elementInExcludedList = excludedList.indexOf(targetLi.id);


      if (elementInSelectedList == -1) {
        $(targetLi)
          .addClass('checked').removeClass('unchecked')
          .clone(true)
          .appendTo('.selectedSection');
        selectedList.push(targetLi.id);

        if (elementInExcludedList != -1) {
          $('.excludedSection #' + targetLi.id).remove();
          excludedList.splice(elementInExcludedList, 1);
        }

      } else {

      }

    }),

    $('.exclude').bind('click', function() {
      var targetLi = this.closest('li'),
        elementInSelectedList = selectedList.indexOf(targetLi.id),
        elementInExcludedList = excludedList.indexOf(targetLi.id);


      if (elementInExcludedList == -1) {
        $(targetLi)
          .addClass('unChecked').removeClass('checked')
          .clone(true)
          .appendTo('.excludedSection');
        excludedList.push(targetLi.id);

        if (elementInSelectedList != -1) {
          $('.selectedSection #' + targetLi.id).remove();
          selectedList.splice(elementInSelectedList, 1);
        }

      } else {

      }

    });

})();