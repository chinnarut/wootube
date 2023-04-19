import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Signin from "./pages/Signin";
import Search from "./pages/Search";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({theme}) => theme.bg};
`;

const Wrapper = styled.div`
  padding: 22px 87px;
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route index path="/" element={<Home type="random" />} />
                <Route path="/search" element={<Search />} />
                <Route path="/trends" element={<Home type="trend" />} />
                <Route path="/subscriptions" element={<Home type="sub" />} />
                <Route path="/music" element={<Home type="music" />} />
                <Route path="/sports" element={<Home type="sports" />} />
                <Route path="/gaming" element={<Home type="gaming" />} />
                <Route path="/movies" element={<Home type="movies" />} />
                <Route path="/news" element={<Home type="news" />} />
                <Route path="/live" element={<Home type="live" />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/video/:id" element={<Video />} />
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
