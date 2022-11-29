import React, { useEffect } from 'react'
import {Link, useLocation} from "react-router-dom"

export default function Navbar() {
    let location=useLocation();
    useEffect(()=>{
        console.log(location.pathname)
    },[location])
    
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand active" to="/" style={{borderStyle: "groove",margin:"5px",padding:"5px 4px"}}>GreedNews</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-4">
                <li className="nav-item "><Link className={`nav-link fs-5 px-3 ${location.pathname==="/"?"active":""}`}  to="/"></Link></li>

                <li className="nav-item "><Link className={`nav-link active fs-5 px-3 ${location.pathname==="/business"?"active":""}`} to="/business">Business</Link></li>
                <li className="nav-item"><Link className={`nav-link active fs-5 px-3 ${location.pathname==="/entertainment"?"active":""}`} to="/entertainment">Entertainment</Link></li>
                <li className="nav-item"><Link className={`nav-link active fs-5 px-3 ${location.pathname==="/general"?"active":""}`} to="/general">General</Link></li>
                <li className="nav-item"><Link className={`nav-link active fs-5 px-3 ${location.pathname==="/health"?"active":""}`} to="/health">Health</Link></li>
                <li className="nav-item"><Link className={`nav-link active fs-5 px-3 ${location.pathname==="/science"?"active":""}`} to="/science">Science</Link></li>
                <li className="nav-item"><Link className={`nav-link active fs-5 px-3 ${location.pathname==="/sports"?"active":""}`} to="/sports">Sports</Link></li>
                <li className="nav-item"><Link className={`nav-link active fs-5 px-3 ${location.pathname==="/technology"?"active":""}`} to="/technology">Technology</Link></li>
                
            </ul>
            </div>
        </div>
      </nav>
    </div>
  )
}
