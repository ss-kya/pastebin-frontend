// components
import Navbar from "./components/Navbar";
import AddInput from "./components/AddInput";
import ViewPosts from "./components/ViewPosts";
import Footer from "./components/Footer";

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <AddInput />
      <ViewPosts />
      <Footer />
    </>
  );
}

export default App;
