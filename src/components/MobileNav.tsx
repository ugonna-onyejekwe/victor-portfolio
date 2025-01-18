"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";
import { navList } from "./navbar";
import { Button } from "./ui/button";

type MobileNavProps = {
  open: boolean;
  onOpenChange: (value: boolean) => void;
};

const MobileNav = ({ open, onOpenChange }: MobileNavProps) => {
  return (
    <Sheet onOpenChange={onOpenChange} open={open}>
      <SheetContent>
        <SheetHeader className="hidden">
          <SheetTitle>Mobile nav bar</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-4 mt-5 ">
          {navList.map((i, key) => (
            <p
              key={key}
              onClick={() => onOpenChange(false)}
              className="pb-4 border-b border-gray-300 capitalize font-medium text-[15px] text-dark/70 hover:text-primary hover:border-primary"
            >
              <Link href={`${i.link}`}>{i.name}</Link>
            </p>
          ))}

          <Button asChild onClick={() => onOpenChange(false)}>
            <Link href={"#contact"}>Contact me</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
