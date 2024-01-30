function onClickBtn(text) {
  var convertText = text;
  let output = document.getElementById('outputArea');
  const form = document.forms[0];
  const radio = form.elements['case'];
  const whichCase = radio.value;
  console.log(radio.value);
  const convertedTxt = convert(whichCase, convertText);
  output.value = convertedTxt;
}

function convert(whichCase, text) {
  let str;
  if (whichCase === 'camel') {
    str = text.toLowerCase().replace(/([-_][a-z])/g, (letter) => letter.slice(-1).toUpperCase());
  } else {
    str = text.replace(/[A-Z]/g, (letter, index) => { return index == 0 ? letter.toLowerCase() : '_' + letter.toLowerCase(); });
  }
  return str;
}