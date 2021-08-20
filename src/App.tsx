// components
import Navbar from "./components/Navbar";
import PostInput from "./components/PostInput";
import ViewPosts from "./components/ViewPosts";

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <PostInput />
      <ViewPosts />
    </>
  );
}

export default App;
