import {connect} from "../../../../dbConfig/dbConfig"
import {NextRequest,NextResponse} from "next/server";
import User from "../../../../models/userModel"

connect()

export async function POST(request:NextRequest){
    try {
        const reqBody=await request.json();
         //bu tanımı anlamadım
        const {token} = reqBody
        console.log(token);

     const user = await User.findOne({verifyToken:token,verifyTokenExpire:{$gt:Date.now()}});
     if(!user){
         return NextResponse.json({error:"Geçersiz Token"},{status:400});
     }
     console.log(user);
     user.isVerifyed = true;
     user.verifyToken = undefined;
     user.verifyTokenExpiry=undefined;
     await user.save();

     return NextResponse.json({
         message:"E mail başarı ile doğrulandı.",
         success: true,
     });

    }catch (error:any){
        return NextResponse.json({error:error.message},{status:500})
    }
}
