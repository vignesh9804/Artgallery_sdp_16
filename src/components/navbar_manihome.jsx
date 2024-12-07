import React from 'react'
import '../css/navbar.css';

const navbar_manihome = () => {
    const arr = ['collection','shop','cart','logout'];
    return (
      <div className="" id="homemain">
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
          <div className="container-fluid">
              <a className="navbar-brand" href="/home">ART GALLERY</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav ms-auto">
                      {arr.map((e)=>(
                      <li class="nav-item" key= {e}><a className="nav-link active" href={'/'+e}>{e.toUpperCase()}</a></li>
                      ))}
                  </ul>
                  </div>
          </div>
      </nav>
  </div>
  
    )
}

export default navbar_manihome
