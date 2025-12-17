import url from 'url'

const myurl= new URL('https://www.coding.com:8000')
myurl.pathname= '/a/b/c'
myurl.search= '?d=e'
myurl.hash= '#fgh'

console.log(myurl)
console.log(myurl.href)