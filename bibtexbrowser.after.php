 <?php

  function frameset() {    ?>


    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
    <html  xmlns="http://www.w3.org/1999/xhtml">
    <head>
    <meta name="generator" content="bibtexbrowser v__GITHUB__" />
    <meta http-equiv="Content-Type" content="text/html; charset=<?php echo OUTPUT_ENCODING ?>"/>
    <title>You are browsing <?php echo htmlentities($_GET[Q_FILE], ENT_QUOTES); ?> with bibtexbrowser</title>
    </head>
    <frameset rows="200px,*">
    <frame name="menu" src="<?php echo '?'.Q_FILE.'='. urlencode($_GET[Q_FILE]).'&amp;menu'; ?>" />
    <frame name="main" src="<?php echo '?'.Q_FILE.'='. urlencode($_GET[Q_FILE]).'&amp;'.BIBTEXBROWSER_DEFAULT_FRAME?>" />
    </frameset>
    </html>

    <?php
    return 'END_DISPATCH';
}

?>
