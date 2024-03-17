import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react';
import prisma from '@/lib/db/prisma';  
// import { EnrollinCourse } from '../actions/EnrollCourse';
import EnrollButton from './EnrollButton';

async function page() {
    const courses= await prisma.course.findMany();
    
    return (
        <div className='m-6'>

            <div className=' flex flex-wrap justify-center'>
            {courses.map((course)=>{
        

                return(
                    
                    <Card key={course.id} className='w-1/3 pr-2 mb-12 mx-10 border-2 border-black dark:border-white'>
                <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription className=''>{course.description} </CardDescription>
                </CardHeader>
                <CardFooter>
                  <EnrollButton {...course}/>  
                </CardFooter>
            </Card>
                )
            })}
            </div>
           
        </div>
    )
}

export default page