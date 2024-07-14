import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
       username:{
        type:String,
        required:[true,"please provide a username"],
        unique:true,
       },
       email:{
        type:String,
        required:[true,"please provide a email"],
        unique:true,
       },
       password:{
        type:String,
        required:[true,"please provide a password"],
        unique:true,
       },
       /* ortak alanlar oluyo buralarda  rollerimi bir yerden getiriyorum enum dosyasını yapabileceğim yerden numaralandırmayı yönetici yöneticisi gibi getir */
       /* öğrenci-öğretmen     öğretmen cok rolu var  */
       isVerifyed:{
        type:Boolean,
        default:false,
       },
       isAdmin:{
        type:Boolean,
        default:false,
       },
       forgotPasswordToken:String,
       forgotPasswordTokenExpiry:Date, /* unutulmus sifre belirtecinin sona erme tarihini sorgulama */
       verifyToken:String,/* belirtecin calıstıgını dogrulayın */
       verifyTokenExpiry:Date, /* belirtecinin sona erme tarihini sorgulama */
       

})
const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;  /* User mongoose dan geliyor mantıklı bişey bu */
