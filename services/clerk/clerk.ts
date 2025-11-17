import { UserTable } from "@/drizzle/schema";
import { auth, clerkClient } from "@clerk/nextjs/server";

const client = await clerkClient();
export const syncClerkUserMetadata = (
  {
    clerkUserId,
  }: {
    clerkUserId: string;
  },
  user: UserTable
) => {
  return client.users.updateUserMetadata(clerkUserId, {
    publicMetadata: {
      dbId: user.id,
      role: user.role,
    },
  });
};

export async function getCurrentUser() {
  const { userId, redirectToSignIn, sessionClaims } = await auth();
  return {
    clerkUserId: userId,
    dbId: sessionClaims?.dbId,
    role: sessionClaims?.role,
    redirectToSignIn,
  };
}
