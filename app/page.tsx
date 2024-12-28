import Blog from "@/components/ui/blog";
import Card from "@/components/ui/card";
export default function Home() {
  return (
    <>
    <div className="home">
      <div className="home-content">
      <p>Travel Blog</p>
      <h1>Going Places</h1>
      <p>I have not been everywhere, but it is on my list</p>
    </div>
    </div>
    <Card/>
    <Blog/>
    </>
  );
}
