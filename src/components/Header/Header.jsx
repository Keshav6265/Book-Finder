import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../Searchform/SearchForm";
import "./Header.css";

const Header=() =>{
    return (
        <div className="holder">
        <header className="header">
            <Navbar />
            <div className="header-content flex flex-c text-center text-white ">
              <h2 className="header-title text-capitalize">find your book of choice.
              </h2><br />
              <p className="header-text fs-18 fw-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, whe
             n an </p> 
             <SearchForm />
            </div>
        </header>
        </div>
    )
}
export default Header