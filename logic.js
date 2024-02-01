function onClickBtn(text) {
  let output = document.getElementById('outputArea');
  const form = document.forms[0];
  const radio = form.elements['case'];
  console.log(radio.value);
  const convertedTxt = convert(radio.value, text);
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

function copy(text) {
  navigator.clipboard.writeText(text).then(
    () => {
      document.getElementById('tooltip-text').style.opacity = '1';
      document.getElementById('tooltip-text').style.visibility = 'visible';
      console.log("Copied Successful!")
      setTimeout(() => {
        document.getElementById('tooltip-text').style.opacity = '0';
        document.getElementById('tooltip-text').style.visibility = 'hidden';
      }, 2000);
    },
    () => {
      console.log("Failed Copy!")
    },
  );
}