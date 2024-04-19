import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = ({show}) => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://th.bing.com/th/id/R.96d6a3163510b47bda4d016b465fb380?rik=RdmM%2faKqGkQOUw&riu=http%3a%2f%2fimg4.wikia.nocookie.net%2f__cb20130124112826%2flogopedia%2fimages%2f8%2f8e%2fIMDB.png&ehk=Svd7%2fn42Zig1owSS1hb%2b2k8bFFdbEKW6iFyTQu2u5yw%3d&risl=&pid=ImgRaw&r=0" alt="IMDB icon" /></Link>
                {show && <>
                    <a href="#popular" style={{textDecoration: "none"}}><span>Trending</span></a>
                    <a href="#top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></a>
                    <a href="#upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></a>
                </>}
            </div>
        </div>
    )
}

export default Header