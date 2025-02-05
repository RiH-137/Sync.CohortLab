// Provider is use to check the user the authentication.
"use client";
import React, { useEffect } from 'react';
import { db } from '@/configs/db';
import { USER_TABLE } from '@/configs/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';


function Provider({children}){

    const {user}=useUser();

    //useEffect hook to maintain the changes
    useEffect(()=>{
        user&&CheckIsNewUser();
    }, [user])

    const CheckIsNewUser=async()=>{
            // check if the user is already exist
        const result =await db.select().from(USER_TABLE)
        .where(eq(USER_TABLE.email,user?.primaryEmailAddress?.emailAddress))

        console.log(result);
        if(result?.length==0){

            // if not, then add to db
            const userResp= await db.insert(USER_TABLE).values({
                name:user?.fullName,
                email:user?.primaryEmailAddress?.emailAddress
            }).returning({id:USER_TABLE.id})

            console.log(userResp);
        }



    }



  return (
    <div>{children}</div>
  )
}

export default Provider