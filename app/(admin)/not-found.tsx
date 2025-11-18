import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/admin">Return Admin</Link>
    </div>
  );
}
