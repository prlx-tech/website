"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "",
    },
  ];

  const [isOpen, setOpen] = useState(false);
  return (
    <header className="w-full z-40 fixed top-0 bg-background">
      <div className="container relative  min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
        <div className="flex">
          <Image
            src="/logo-web.jpg"
            width={100}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
    </header>
  );
};
