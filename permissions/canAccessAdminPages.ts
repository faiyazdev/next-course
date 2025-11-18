import { UserRole } from "@/drizzle/schema";

export function canAccessAdminPages(userRole: UserRole) {
  return userRole == "admin";
}
