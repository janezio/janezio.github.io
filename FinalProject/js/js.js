$(document).ready(function(){
  // alert('beginning!')

  $('.janeslist').each(function() {
    $(this).contents().wrap('<a href="index.html"></a>');
  });

  $('.janeslistabout').each(function() {
    $(this).contents().wrap('<a href="about.html" aria-label="about link"></a>');
  });

  $(function(){
    $('a').each(function() {
      if ($(this).prop('href') == window.location.href) {
        $(this).addClass('current');
      }
    });
  });

  $("input[type='tel']").each(function(){
    $(this).on("change keyup paste", function (e) {
      var output,
        $this = $(this),
        input = $this.val();

      if(e.keyCode != 8) {
        input = input.replace(/[^0-9]/g, '');
        var area = input.substr(0, 3);
        var pre = input.substr(3, 3);
        var tel = input.substr(6, 4);
        if (area.length < 3) {
          output = "(" + area;
        } else if (area.length == 3 && pre.length < 3) {
          output = "(" + area + ")" + " " + pre;
        } else if (area.length == 3 && pre.length == 3) {
          output = "(" + area + ")" + " " + pre + "-" + tel;
        }
        $this.val(output);
      }
    });
  });
})
