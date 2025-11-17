import { db } from "@/drizzle";
import { UserTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export async function insertUser(data: UserTable) {
  const [newUser] = await db
    .insert(UserTable)
    .values(data)
    .onConflictDoUpdate({
      target: UserTable.clerkUserId,
      set: data,
    })
    .returning();

  return newUser;
}

export async function updateUser(
  { clerkUserId }: { clerkUserId: string },
  data: Partial<UserTable>
) {
  const [updatedUser] = await db
    .update(UserTable)
    .set(data)
    .where(eq(UserTable.clerkUserId, clerkUserId))
    .returning();

  return updatedUser;
}

export async function deleteUser({ clerkUserId }: { clerkUserId: string }) {
  return await db
    .update(UserTable)
    .set({
      clerkUserId,
    })
    .where(eq(UserTable.clerkUserId, clerkUserId))
    .returning();
}
