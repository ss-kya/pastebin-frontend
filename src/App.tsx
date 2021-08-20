// components
import Navbar from "./components/Navbar";
import PostInput from "./components/PostInput";
import ViewPosts from "./components/ViewPosts";
import Footer from "./components/Footer";

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <PostInput />
      <ViewPosts />
      <Footer />
    </>
  );
}

export default App;
