import {  useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";

const App = () => {
	const [data, setData] = useState([]);
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home data={data} setData={setData} />} />
			</Routes>
			<Routes>
				<Route path='/create' element={<CreatePost />} />
			</Routes>
			<Routes>
				<Route path='/post/:id' element={<PostPage />} />
			</Routes>
		
		</Router>
	);
};
export default App;
