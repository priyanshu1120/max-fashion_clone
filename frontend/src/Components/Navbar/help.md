  <div className="navbar">
       <div className = "logo">
        <Link to="/"><img src="./maxlogo" alt="logo"/></Link> 
       </div>
       <div className = "left-option">
       <Link to="/womens"className="women"><div>Women</div></Link> 
        <Link to="/mens" className="men"><div>Men</div></Link>
        <Link to="/girls" className = "girls"><div>Girls</div></Link>
        <Link to="/boys"  className = "boys"><div>Boys</div></Link>
       </div>
       <div className="search">
       <FaSearch color="#9d9e9c" className="searchIcon" />
        <input placeholder="What are you looking for"  onChange={handleChange} value={text}/>
       </div>
       <div className= "right-option">
        <div>More</div>
        <div> <ModalNavbar  /></div>
        <div><MdFavoriteBorder className="favrt" /></div>
        <div><BsHandbag className="cart"/> </div>
       </div>
    
   </div>