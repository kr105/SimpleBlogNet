import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Widgets from '../components/Widgets/Widgets'
import Contact from '../pages/Contact/Contact'
import Home from '../pages/Home/Home'
import NotFound from '../pages/NotFound/NotFound'
import Post from '../pages/Post/Post'
import './App.scss'

function App() {

    return (
        <div className="App">
            <Navbar />

            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-8">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/post/:id" element={<Post />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>
                    <div className="col-lg-4">
                        <Widgets />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
