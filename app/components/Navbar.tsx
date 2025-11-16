"use client";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 left-0 border-b bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60 py-4">
      <div className="px-4 sm:px-8 mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Next LMS</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6  font-medium">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link
            href="/courses"
            className="hover:text-primary transition-colors"
          >
            Courses
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="ghost">Login</Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button className="bg-primary text-white rounded-full px-5">
                Sign Up
              </Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetHeader>
                <SheetTitle>Next LMS</SheetTitle>
              </SheetHeader>

              <nav className="flex px-4 flex-col gap-4 mt-6 text-lg font-medium">
                <Link href="/">Home</Link>
                <Link href="/courses">Courses</Link>
                <Link href="/about">About</Link>
              </nav>

              <div className="mt-6 px-4 flex flex-col gap-3">
                <SignedOut>
                  <SignInButton mode="modal">
                    <Button variant="outline" className="w-full">
                      Login
                    </Button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <Button className="w-full bg-primary text-white">
                      Sign Up
                    </Button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
