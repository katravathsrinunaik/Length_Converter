document.getElementById('convertBtn').addEventListener('click', function() {
    var inputValue = parseFloat(document.getElementById('inputValue').value);
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;
  
    var convertedValue;
  
    if (fromUnit === 'mm' && toUnit === 'cm') {
      convertedValue = inputValue / 10;
    } else if (fromUnit === 'mm' && toUnit === 'm') {
      convertedValue = inputValue / 1000;
    } else if (fromUnit === 'mm' && toUnit === 'km') {
      convertedValue = inputValue / 1000000;
    } else if (fromUnit === 'mm' && toUnit === 'in') {
      convertedValue = inputValue / 25.4;
    } else if (fromUnit === 'mm' && toUnit === 'ft') {
      convertedValue = inputValue / 304.8;
    } else if (fromUnit === 'mm' && toUnit === 'yd') {
      convertedValue = inputValue / 914.4;
    } else if (fromUnit === 'mm' && toUnit === 'mi') {
      convertedValue = inputValue / 1609344;
    } else if (fromUnit === 'cm' && toUnit === 'mm') {
      convertedValue = inputValue * 10;
    } else if (fromUnit === 'cm' && toUnit === 'm') {
      convertedValue = inputValue / 100;
    } else if (fromUnit === 'cm' && toUnit === 'km') {
      convertedValue = inputValue / 100000;
    } else if (fromUnit === 'cm' && toUnit === 'in') {
      convertedValue = inputValue / 2.54;
    } else if (fromUnit === 'cm' && toUnit === 'ft') {
      convertedValue = inputValue / 30.48;
    } else if (fromUnit === 'cm' && toUnit === 'yd') {
      convertedValue = inputValue / 91.44;
    } else if (fromUnit === 'cm' && toUnit === 'mi') {
      convertedValue = inputValue / 160934.4;
    } else if (fromUnit === 'm' && toUnit === 'mm') {
      convertedValue = inputValue * 1000;
    } else if (fromUnit === 'm' && toUnit === 'cm') {
      convertedValue = inputValue * 100;
    } else if (fromUnit === 'm' && toUnit === 'km') {
      convertedValue = inputValue / 1000;
    } else if (fromUnit === 'm' && toUnit === 'in') {
      convertedValue = inputValue * 39.37;
    } else if (fromUnit === 'm' && toUnit === 'ft') {
      convertedValue = inputValue * 3.281;
    } else if (fromUnit === 'm' && toUnit === 'yd') {
      convertedValue = inputValue * 1.094;
    } else if (fromUnit === 'm' && toUnit === 'mi') {
      convertedValue = inputValue / 1609;
    } else if (fromUnit === 'km' && toUnit === 'mm') {
      convertedValue = inputValue * 1000000;
    } else if (fromUnit === 'km' && toUnit === 'cm') {
      convertedValue = inputValue * 100000;
    } else if (fromUnit === 'km' && toUnit === 'm') {
      convertedValue = inputValue * 1000;
    } else if (fromUnit === 'km' && toUnit === 'in') {
      convertedValue = inputValue * 39370.079;
    } else if (fromUnit === 'km' && toUnit === 'ft') {
      convertedValue = inputValue * 3280.84;
    } else if (fromUnit === 'km' && toUnit === 'yd') {
      convertedValue = inputValue * 1093.613;
    } else if (fromUnit === 'km' && toUnit === 'mi') {
      convertedValue = inputValue / 1.609;
    } else if (fromUnit === 'in' && toUnit === 'mm') {
      convertedValue = inputValue * 25.4;
    } else if (fromUnit === 'in' && toUnit === 'cm') {
      convertedValue = inputValue * 2.54;
    } else if (fromUnit === 'in' && toUnit === 'm') {
      convertedValue = inputValue / 39.37;
    } else if (fromUnit === 'in' && toUnit === 'km') {
      convertedValue = inputValue / 39370.079;
    } else if (fromUnit === 'in' && toUnit === 'ft') {
      convertedValue = inputValue / 12;
    } else if (fromUnit === 'in' && toUnit === 'yd') {
      convertedValue = inputValue / 36;
    } else if (fromUnit === 'in' && toUnit === 'mi') {
      convertedValue = inputValue / 63360;
    } else if (fromUnit === 'ft' && toUnit === 'mm') {
      convertedValue = inputValue * 304.8;
    } else if (fromUnit === 'ft' && toUnit === 'cm') {
      convertedValue = inputValue * 30.48;
    } else if (fromUnit === 'ft' && toUnit === 'm') {
      convertedValue = inputValue / 3.281;
    } else if (fromUnit === 'ft' && toUnit === 'km') {
      convertedValue = inputValue / 3280.84;
    } else if (fromUnit === 'ft' && toUnit === 'in') {
      convertedValue = inputValue * 12;
    } else if (fromUnit === 'ft' && toUnit === 'yd') {
      convertedValue = inputValue / 3;
    } else if (fromUnit === 'ft' && toUnit === 'mi') {
      convertedValue = inputValue / 5280;
    } else if (fromUnit === 'yd' && toUnit === 'mm') {
      convertedValue = inputValue * 914.4;
    } else if (fromUnit === 'yd' && toUnit === 'cm') {
      convertedValue = inputValue * 91.44;
    } else if (fromUnit === 'yd' && toUnit === 'm') {
      convertedValue = inputValue / 1.094;
    } else if (fromUnit === 'yd' && toUnit === 'km') {
      convertedValue = inputValue / 1093.613;
    } else if (fromUnit === 'yd' && toUnit === 'in') {
      convertedValue = inputValue * 36;
    } else if (fromUnit === 'yd' && toUnit === 'ft') {
      convertedValue = inputValue * 3;
    } else if (fromUnit === 'yd' && toUnit === 'mi') {
      convertedValue = inputValue / 1760;
    } else if (fromUnit === 'mi' && toUnit === 'mm') {
      convertedValue = inputValue * 1609344;
    } else if (fromUnit === 'mi' && toUnit === 'cm') {
      convertedValue = inputValue * 160934.4;
    } else if (fromUnit === 'mi' && toUnit === 'm') {
      convertedValue = inputValue * 1609.344;
    } else if (fromUnit === 'mi' && toUnit === 'km') {
      convertedValue = inputValue * 1.609;
    } else if (fromUnit === 'mi' && toUnit === 'in') {
      convertedValue = inputValue * 63360;
    } else if (fromUnit === 'mi' && toUnit === 'ft') {
      convertedValue = inputValue * 5280;
    } else if (fromUnit === 'mi' && toUnit === 'yd') {
      convertedValue = inputValue * 1760;
    } else {
      convertedValue = inputValue;
    }
  
    document.getElementById('outputValue').value = convertedValue;
  });
  