// Javascript progressive enhancement for bibtexbrowser
$('a.biburl').each(function() { // for each url "[bibtex]"
  var biburl = $(this);
  if (biburl.attr('bibtexbrowser') === undefined)
  {
  biburl.click(function(ev) { // we change the click semantics
    ev.preventDefault(); // no open url
    if (biburl.nextAll('pre').length == 0) { // we don't have yet the bibtex data
      var bibtexEntryUrl = $(this).attr('href');
      $.ajax({url: bibtexEntryUrl,  dataType: 'html', success: function (data) { // we download it
        // elem is the element containing bibtex entry, creating a new element is required for Chrome and IE
        var elem = $('<pre class="purebibtex"/>');
        elem.text($('.purebibtex', data).text()); // both text() are required for IE
        // we add a link so that users clearly see that even with AJAX
        // there is still one URL per paper.
        elem.append(
          $('<div class="bibtex_entry_url">%% Bibtex entry URL: <a href="'+bibtexEntryUrl+'">'+bibtexEntryUrl+'</a></div>')
          ).appendTo(biburl.parent());
      }, error: function() {window.location.href = biburl.attr('href');}});
    } else {biburl.nextAll('pre').toggle();}  // we toggle the view
  });
  biburl.attr('bibtexbrowser','done');
  } // end if biburl.bibtexbrowser;
});