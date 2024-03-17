import FormSubmitButton from "@/components/FormSubmitButton";
import prisma from "@/lib/db/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
  title: "Add product ",
};

async function addProduct(formdata: FormData) {
  "use server";

  const session = await getServerSession(authOptions)
  if(!session){
    redirect("/api/auth/signin?callbackUrl=/add-product")
  }

  const title = formdata.get("name")?.toString();
  

  if (!title ) {
    throw Error("Missing required Fields");
  }

  await prisma.subject.create({
    data: { title },
  });

  redirect("/");
}

export default async function AddProductPage() {

  const session = await getServerSession(authOptions)
  
  if(!session){
    redirect("/api/auth/signin?callbackUrl=/add-product")
  }

  return (
    <div>
      <h1 className="mb-3 text-2xl font-bold ">Add Product</h1>
      <form action={addProduct}>
        <input
          className="input input-bordered mb-3  max-w-xs "
          required
          name="name"
          placeholder="name"
          type="text"
        />

        
       
        <FormSubmitButton className=" btn-block" type="submit">
          Add Product
        </FormSubmitButton>
      </form>
    </div>
  );
}