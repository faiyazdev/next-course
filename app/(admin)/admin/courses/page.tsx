import PageHeader from "@/app/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Courses() {
  return (
    <div>
      <div className="flex justify-between">
              <PageHeader>Courses</PageHeader>
          <Button asChild>
            <Link href={"/admin/courses/new"}>
            New Course</Link>
          </Button>
      </div>
      <div className=""></div>
    </div>
  );
}

export default Courses;
