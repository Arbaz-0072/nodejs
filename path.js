const path= require('path')

const a1= path.basename('C:\\temp\\myfile.html')
const a2= path.dirname('C:\\temp\\myfile.html')
const a3= path.extname('__filename')
console.log(a1,"\n",a2,"\n",__filename,a3)