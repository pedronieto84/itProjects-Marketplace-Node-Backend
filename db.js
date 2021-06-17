
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://itAcademy:itAcademy123456@itacademy.z7wd2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")


.then((res)=>{
    console.log('SUCCESSFULL DB CONNECTION')
})
.catch((e)=>{
    console.error('ERROR IN CONNECTION', e)
})