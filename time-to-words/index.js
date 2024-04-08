// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {

  if (time === '0:00') {
    return 'midnight';
  }
  if (time === '12:00') {
    return 'midday';
  }

  const [hour, min ] = time.split(':');

  const numbers = {
    2: 'two',
    3: 'three',
    4:'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten'
  }


  if ( min === '00') return `${numbers[Number(hour)]} o'clock'`
  
  if (min === '30') return `half past ${numbers[Number(hour)]}`

  if ( min === '15') return `quarter past ${numbers[Number(hour)]}`

  if ( min === '45') return `quarter to ${numbers[Number(hour)+1]}`

  if (Number(min) < 30) return `${numbers[Number(min)]} past ${numbers[Number(hour)]}`

  if (Number(min) > 30) return `${numbers[Number(min)]} to ${numbers[Number(hour)+1]}`

}

module.exports = { convertTimeToWords };