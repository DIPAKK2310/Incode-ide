import NextAuth from "next-auth";
import {DEFAULT_LOGIN_REDIRECT, apiAuthPrefix, publicRoutes, authRoutes } from "@/routes"
import authConfig from "./auth.config";



const {auth} = NextAuth(authConfig)

export default auth((req)=>{
    const {nextUrl} = req;
    const isLoggedIn = !!req.auth;//req.user is added by next-auth middleware
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);// /api/auth routes are public
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);//Other public routes 
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);// Auth routes like sign-in, sign-up etc
    
    if(isApiAuthRoute){
        return null ;//Allow the request
    }//No redirect

    if(isAuthRoute){
        if(isLoggedIn){
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))//Redirect to home page if logged in
        }
        return null;//Allow the request
    }
    if(!isLoggedIn && !isPublicRoute){
        return Response.redirect(new URL("/auth/sign-in", nextUrl))//Redirect to sign-in page if not logged in
    }   
    return null;//Allow the request
})

export const config = {

    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"], 
}