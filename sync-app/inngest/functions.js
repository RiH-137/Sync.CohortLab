import { inngest } from "./client";

import { db } from "@/configs/db";
import { USER_TABLE } from "@/configs/schema";
import { eq } from "drizzle-orm";


export const helloWorld = inngest.createFunction(
    { id: "hello-world" },
    { event: "test/hello.world" },
    async ({ event, step }) => {
        await step.sleep("wait-a-moment", "1s");
        return { message: `Hello ${event.data.email}!` };
    },
);


export const CreateNewUser = inngest.createFunction(
    { id: 'create-user' },
    { event: 'user.create' },

    async ({ event, step }) => {
        const { user } = event.data;

        //get event data
        const result = await step.run('Check User and create New if Not in DB', async () => {

            // check if the user is already exist
            const result = await db.select().from(USER_TABLE)
                .where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress))

            console.log(result);
            if (result?.length == 0) {

                // if not, then add to db
                const userResp = await db.insert(USER_TABLE).values({
                    name: user?.fullName,
                    email: user?.primaryEmailAddress?.emailAddress
                }).returning({ id: USER_TABLE.id })
                return userResp;

                // console.log(userResp);
            }
            return result;
        })
        return 'Success';


    }

    // Step is to send Welcome email to the user


    // Step is to send email notification after 3 days once user join it

)
