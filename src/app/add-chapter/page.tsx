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

  const title = formdata.get("title")?.toString();
  const videoLink = formdata.get("videoLink")?.toString();
  const pdflink = formdata.get("pdflink")?.toString();
  

  if (!title || !videoLink || !pdflink ) {
    throw Error("Missing required Fields");
  }

  await prisma.content.create({
    data: { title, videoLink, pdflink },
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
          name="title"
          placeholder="name"
          type="text"
        />

        <textarea
          name="videolink"
          placeholder="videoLink"
          className="textarea textarea-bordered mb-3 w-full"
          required
          id=""
        />

        <input
          className="input input-bordered mb-3  max-w-xs "
          required
          name="pdflink"
          placeholder="img-url"
          type="url"
        />

        
        <FormSubmitButton className=" btn-block" type="submit">
          Add Product
        </FormSubmitButton>
      </form>
    </div>
  );
}