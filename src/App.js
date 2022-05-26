// import logo from './logo.svg';
// import Welcome, { WelcomeH2 } from './components/welcome/Welcome';
import './App.css';
// import Button from './components/button/Button';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Team from './components/team/Team';
import Blog from './pages/blog/Blog';
import BlogDetail from './pages/blogDetail/blogDetail';
import Navigasi from './pages/navigasi/Navigasi';

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />}>
              <Route path="team" element={<Team />} />
          </Route>
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:judul" element={<BlogDetail />} />
          <Route path="navigasi" element={<Navigasi />} />
          <Route path="*" element={<h1>404 URL SALAH !!!!</h1>} />
        </Routes>
      </BrowserRouter>
    </>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //   </header>
    //   <Welcome/>
    //   <WelcomeH2 children="Ini Welcome h2 pertama"/>
    //   <WelcomeH2 children="Ini Welcome h2 kedua"/>
    //   <WelcomeH2>Tombol dari welcome h2</WelcomeH2>
    //   <Button>Start Learn</Button>
    // </div>
  );
}

export default App;
