"use client";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { ReactNode, useState } from "react";
import SectionForm from "./SectionForm";
import { CourseSectionStatus } from "@/drizzle/schema";

type SectionFormDialogProps = {
  courseId: string;
  section?: {
    id: string;
    name: string;
    status: CourseSectionStatus;
  };
  children: ReactNode;
};

const SectionFormDialog = ({
  courseId,
  section,
  children,
}: SectionFormDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{section ? "Edit Section" : "New Section"}</DialogTitle>
        </DialogHeader>

        <div className="mt-3">
          <SectionForm
            section={section}
            courseId={courseId}
            onError={() => setIsOpen(false)}
            onSuccess={() => setIsOpen(false)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SectionFormDialog;
