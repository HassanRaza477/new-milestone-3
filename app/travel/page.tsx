import BlogPost from "@/components/ui/blog";
import Link from "next/link";

export default function Travel(){
    return(
        <>
        <div className="travel">
           <Link href="#"><h1>Travel</h1></Link>
            <p>
            Traveling is more than just visiting new places  its about experiencing life in its most vibrant
            and authentic form.
            </p>
            <BlogPost/>
        </div>
        </>
    )
}