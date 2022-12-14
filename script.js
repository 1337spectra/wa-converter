function convertToBBCode() {
  // Get the HTML input
  var html = document.getElementById('html-input').value;
  // Convert the HTML to BBCode
  var bbcode = html
    // Replace opening and closing paragraph tags with BBCode paragraph tags
    .replace(/<p>/g, '[p]')
    .replace(/<\/p>/g, '[/p]')
    // Replace bold tags with BBCode bold tags
    .replace(/<strong>/g, '[b]')
    .replace(/<\/strong>/g, '[/b]')
    // Replace italic tags with BBCode italic tags
    .replace(/<em>/g, '[i]')
    .replace(/<\/em>/g, '[/i]')
    // Replace dropcap tags with BBCode dropcap tags
    .replace(/<dropcap>/g, '[dc]')
    .replace(/<\/dropcap>/g, '[/dc]')
    // Replace heading tags with BBCode heading tags
    .replace(/<h1>/g, "[h1]")
    .replace(/<\/h1>/g, "[/h1]")
    .replace(/<h2>/g, "[h2]")
    .replace(/<\/h2>/g, "[/h2]")
    .replace(/<h3>/g, "[h3]")
    .replace(/<\/h3>/g, "[/h3]")
    .replace(/<h4>/g, "[h4]")
    .replace(/<\/h4>/g, "[/h4]")
    .replace(/<h5>/g, "[h5]")
    .replace(/<\/h5>/g, "[/h5]")
    // Replace font tags with BBCode font tags
    .replace(/<strong>/g, "[b]")
    .replace(/<\/strong>/g, "[/b]")
    .replace(/<em>/g, "[i]")
    .replace(/<\/em>/g, "[/i]")
    .replace(/<u>/g, "[u]")
    .replace(/<\/u>/g, "[/u]")
    .replace(/<s>/g, "[s]")
    .replace(/<\/s>/g, "[/s]")
    .replace(/<small>/g, "[small]")
    .replace(/<\/small>/g, "[/small]")
    .replace(/<sup>/g, "[sup]")
    .replace(/<\/sup>/g, "[/sup]")
    .replace(/<sub>/g, "[sub]")
    .replace(/<\/sub>/g, "[/sub]")
    .replace(/<pre>/g, "[noparse]")
    .replace(/<\/pre>/g, "[/noparse]")
    // Replace layout tags with BBCode layout tags
    .replace(/<blockquote>/g, "[quote]")
    .replace(/<\/blockquote>/g, "[/quote]")
    .replace(/<details>/g, "[spoiler]")
    .replace(/<\/details>/g, "[/spoiler]")
    .replace(/<pre>/g, "[code]")
    .replace(/<\/pre>/g, "[/code]")
    .replace(/<abbr title='([^']+)'>/g, "[tooltip:$1]")
    .replace(/<\/abbr>/g, "[/tooltip]")
    .replace(/<p>/g, "[p]")
    .replace(/<\/p>/g, "[/p]")
    .replace(/<br>/g, "[br]")
    .replace(/<br \/>/g, "[br]")
    .replace(/<hr>/g, "[hr]")
    .replace(/<p style='margin-left:20px'>/g, "[in]")
    .replace(/<\/p>/g, "[/in]")
    // Replace container tags with BBCode container tags
    .replace(/<p style="text-align: left;">/g, '[left]')
    .replace(/<\/p>/g, '[/left]')
    .replace(/<p style="text-align: center;">/g, '[center]')
    .replace(/<\/p>/g, '[/center]')
    .replace(/<p style="text-align: right;">/g, '[right]')
    .replace(/<\/p>/g, '[/right]')
    .replace(/<p style="text-align: justify;">/g, '[justify]')
    .replace(/<\/p>/g, '[/justify]')
    .replace(/<p style="text-align: center; margin: 0 auto;">/g, '[concol]')
    .replace(/<\/p>/g, '[/concol]')
    .replace(/<p style="text-align: right; direction: rtl;">/g, '[rtl]')
    .replace(/<\/p>/g, '[/rtl]')
    // Replace list tags with BBCode list tags
    .replace(/<ul>/g, "[ul]")
    .replace(/<\/ul>/g, "[/ul]")
    .replace(/<ol>/g, "[ol]")
    .replace(/<\/ol>/g, "[/ol]")
    .replace(/<li>/g, "[li]")
    .replace(/<\/li>/g, "[/li]")
    // Replace link tags with BBCode link tags
    .replace(/<a href="/g, '[url:')
    .replace(/<\/a>/g, "[/url]")
    // Replace anchor tags with BBCode anchor tags
    .replace(/<h3 id='([^']+)'>/g, "[h3|$1]")
    .replace(/<\/h3>/g, "[/h3]")
    .replace(/<span id='([^']+)'>/g, "[anchor|$1]")
    .replace(/<table>/g, "[table]")
    .replace(/<\/table>/g, "[/table]")
    .replace(/<tr>/g, "[tr]")
    .replace(/<\/tr>/g, "[/tr]")
    .replace(/<th style='width:(\d+)%'>/g, "[th:$1]")
    .replace(/<\/th>/g, "[/th]")
    .replace(/<td style='width:(\d+)%'>/g, "[td:$1]")
    .replace(/<\/td>/g, "[/td]")
    // Replace div elements with class "col" with BBCode col or col3 tags
    //.replace(/<div class="col">/g, '[col]')
    //.replace(/<div class="row">/g, '[row]')
    .replace(/<div class="row">(?:.*?)<div class="col">(.*?)<div class="col">(.*?)<div class="col">(.*?)<\/div>/g, "[row]\n[col3]$1[/col3]\n[col3]$2[/col3]\n[col3]$3[/col3]\n[/row]")
    .replace(/<div class="col">(.*?)<\/div>/g, "[col]$1[/col]")
    .replace(/<div class="row">(.*?)<\/div>/g, "[row]$1[/row]")
    .replace(/<div class="/g, '[container:')
    .replace(/<div>/g, '[container:CLASS_HERE]')
    .replace(/<\/div>/g, '[/container]')
    .replace(/<span class="/g, '[section:')
    .replace(/<\/span>/g, '[/section]')
    .replace(/;">/g, ']')
    .replace(/class="/g, ':')
    .replace(/" \/>/g, ']')
    .replace(/"\/>/g, ']')
    .replace(/src="/g, ':')
    .replace(/="/g, ':')
    .replace(/">/g, ']')
    .replace(/>/g, ']')
    .replace(/</g, '[')
    .replace(/<span style="color:/g, '[color:')
   
  // Set the BBCode output
  document.getElementById('bbcode-output').value = bbcode;
}

function copyToClipboard() {
  // Get the textarea element
  var textarea = document.getElementById('bbcode-output');
  // Select the text in the textarea
  textarea.select();
  // Copy the selected text to the clipboard
  document.execCommand('copy');
  // Change the button text to 'Copied!'
  var button = document.getElementById('copy-button');
  button.textContent = 'Copied!';
  // Reset the button text after 3 seconds
  setTimeout(function () {
    button.textContent = 'Copy';
  }, 3000);
}
