"use client";
import React, { ReactNode } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVerticalIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function SortableItem({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  const {
    attributes,
    listeners,
    activeIndex,
    index,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  const isActive = activeIndex === index;
  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        "flex w-full gap-2 items-center bg-background rounded-lg p-2",
        isActive && "z-10 border shadow-amber-50 shadow-sm"
      )}
    >
      <GripVerticalIcon
        className="text-muted-foreground  size-6 p-1"
        {...attributes}
        {...listeners}
      />
      <div className={cn("grow", className)}>{children}</div>
    </div>
  );
}
