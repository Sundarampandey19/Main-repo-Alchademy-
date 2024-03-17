"use client";

import { ArrowRight } from "lucide-react";
import { EnrollinCourse } from "@/app/dashboard/EnrollCourse";
import { Course } from "@prisma/client";
import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const EnrollButton = (course: Course) => {
    const [isPending, startTransition] = useTransition();
    const [success, setSuccess] = useState(false);


  const id = course.id;
  return (
    <div>
      <Button asChild>
  <Link href="/embed-video">Explore -> </Link>
</Button>
      
    </div>
  );
};

export default EnrollButton;

{/* <button
        className="text-md"
        onClick={() => {
            setSuccess(false);
            startTransition(async () => {
              await EnrollinCourse(id);
              setSuccess(true);
              
            });
          }}
      >
        Enroll
        <div className="pl-1">
          <ArrowRight />
        </div>
      </button> */}