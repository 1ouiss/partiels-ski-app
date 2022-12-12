import { Routes, Route } from "react-router-dom";

const MainRouter = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
}
 
export default MainRouter;