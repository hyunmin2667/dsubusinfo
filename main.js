/* Javascript 샘플 코드 */


var xhr = new XMLHttpRequest();
var url = 'http://apis.data.go.kr/6260000/BusanBIMS/busStopList'; /*URL*/
var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'GtTWpENf8MjZ4eoAaxI7zhYeToCRtJ1GUisNZ%2FuTQQB2jk6gZBE8quzOYW%2BH4QwYdqMXLvaNF1%2Bs9RuU79dbng%3D%3D'; /*Service Key*/
console.log(queryParams);
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
console.log(queryParams);
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
console.log(queryParams);
queryParams += '&' + encodeURIComponent('bstopnm') + '=' + encodeURIComponent('동서대스튜던트프라자'); /**/
console.log(queryParams);
queryParams += '&' + encodeURIComponent('arsno') + '=' + encodeURIComponent(''); /**/
console.log(queryParams);
xhr.open('GET', url + queryParams);

xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        console.log('Status: '+this.status+'\n\nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'\n\nBody: '+this.responseText);
    }
};
xhr.send('');

