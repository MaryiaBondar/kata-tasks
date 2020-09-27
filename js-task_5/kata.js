// Задание 9
function domainName(url){
    return url.replace('http://', '').replace('https://', '').replace('www.', '').replace('.com', '').split('.')[0]
}

// Задание 10
function toCsvText(array) {
    return array.join('\n');
 }
  