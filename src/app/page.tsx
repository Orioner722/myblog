import BlogList from "@/components/blogList/list";
import VoxelComputer from "../components/three/conputer-loader";
export default function Home() {
  return (
    <div>
      <VoxelComputer />
      <BlogList />
    </div>
  );
}
