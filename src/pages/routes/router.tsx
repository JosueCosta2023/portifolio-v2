import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from "../home";
import { About } from '../home/sections/about';

export const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" Component={Home}/>
                <Route path="/about" Component={About}/>
                <Route path="/null" Component={About}/>
                <Route path="/null" Component={About}/>
                <Route path="/null" Component={About}/>
            </Routes>
        </Router>
    )
}