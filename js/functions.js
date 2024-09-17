//  берет строку проверяет ее на полиндромность
const checkPalindrom  =  (palindrom) => {
  palindrom = palindrom.replaceAll(' ', '');
  palindrom = palindrom.toLowerCase();
  let lastIndex = palindrom.length - 1 ;
  for ( let i = 0; i < palindrom.length / 2; i++)  {
    if (palindrom[i] !== palindrom[lastIndex - i]) {
      return false;
    }
  }
  return true;
}

//  берет строку возвращает строку с цифрами из исходной строки.
const getNumber = (text) => {
  let numberFromText = text.replace(/[^0-9]/g, '');
    return numberFromText;
}


// принимает строку и дополняет спереди задаными символами до нужной длинны
const expandLength = (text, minLength, extraString ) => {
  if (minLength <= (text.length)) {
    return text;
  }
  let additionLength = minLength - text.length;
  extraString = extraString.repeat(Math.round(additionLength / extraString.length));
  extraString = extraString.slice(0, (additionLength));
  let targetString = extraString + text;
  return targetString;
}

//  сравнивает длину строки с заданной
const checkLength =  (text, targetLength) => {
  if ((text.length) > targetLength ) {
    return false;
  }
  return true;
}
