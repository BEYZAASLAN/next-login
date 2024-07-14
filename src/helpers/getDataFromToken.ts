//tokendan veri alma işlemi
import {NextRequest} from "next/server";
import jwt from "jsonwebtoken";


//jeton verilerini alma.
export const getDataFRomToken = (request: NextRequest)=> {
      try {
      const token= request.cookies.get("token")?.value || '';
    const decodedToken =  jwt.verify(token, process.env.TOKEN_SECRET!);
    return decodedToken;
      }catch (error:any){
          throw new Error (error.message);
      }
}