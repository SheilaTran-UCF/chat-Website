import Login from './feature/login';
import Register from './feature/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='register' element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
