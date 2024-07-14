"use client"
import  React,{useEffect, useState} from "react";
import axios from "axios";
import Link from "next/link";


export default function VerifyEmailPage(){

    const [token,setToken]=useState("");
    const [verificationCode,setVerificationCode]=useState(false);
    const [error,setError]=useState(false);

    const verifyUserEmail=async()=>{
        try{
            await axios.post("/api/users/verifymail", {token});
            setVerificationCode(true);
        }catch(error:any){
            setError(true);
            console.log( error.response.data);
        }
    }
    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "" )
    }, [token]);

    useEffect(() => {
        if(token.length>0){
            verifyUserEmail();
        }
    }, []);



    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl">Email Doğrulama</h1>
            <h2 className="p-2 bg-pink-500 text-black" >{token ?`${token}`:"token yok "}</h2>
            {
                verificationCode &&(
                    <div>
                        <h2 className="text-2xl">Email Doğrulama</h2>
                        <Link href="/login">
                            Giriş Yap
                        </Link>
                    </div>
                )
            }
            {
                error && (
                    <div>
                        <h2 className="text-black text-2xl bg-red-700">Error</h2>
                    </div>
                )
            }
        </div>
    )
}
