import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRouter } from "./consts/router";
import DictionaryPage from "./pages/dictionary";
import GraphPage from "./pages/graph";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={AppRouter.Dictionary}
                    element={<DictionaryPage />}
                />
                <Route path={AppRouter.Graph} element={<GraphPage />} />
                <Route path={AppRouter.Other} element={<DictionaryPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
