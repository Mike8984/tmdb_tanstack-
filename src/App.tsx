import { Route, Routes } from "react-router";
import RootLayout from "./layouts";
import HomePage from "./pages/home";
import MoviePage from "./pages/movie";

function App() {
    return (
        <Routes>
            <Route path="/" element={<RootLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/movies/:id" element={<MoviePage />} />
            </Route>
        </Routes>
    );
}

export default App;
