import "./Footer.css"
import {Heading,Text,Box, StatHelpText} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import {FaFacebookF,FaTwitter,FaInstagram} from "react-icons/fa"
import {IoMdCall} from "react-icons/io"
import {MdLiveHelp,MdOutlineMailOutline} from "react-icons/md"
import { useState } from "react"


function Footer(){
 const [text,setText] = useState("")
  const handleClick= ()=>{
   setText("");
   alert("Thanku for Subscibe")
  }
    return <footer>
    <div id="footerContainer ">
      <hr />
      <div id="subscription-container">
        <div>
          <Heading>Subscribe to our awesome emails.</Heading>
          <Text mt="10px">Get our latest offers and news straight in your inbox.</Text>
          <input Class="input-sub-box" type="text" placeholder="Please enter an email address" onChange={(e)=>
           setText(e.target.value)} value={text} />
          <button Class="btn-sub-box"  onClick={handleClick}>Subscribe</button>
        </div>

        <div>
          <Heading>Download our apps</Heading>
          <Text mt="10px">Shop our products and offers on-the-go.</Text>
          <span><img style={{marginTop:"20px"}} src="data:image/png;base64,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" alt="app logo" /></span>
        </div>
      </div>

      <hr />
{/* 
      <!-- list of items (sub-section of footer) --> */}
      <div className="list-container">
        <div className="list-up-div flex">
          <div>
            <p><b>Women</b></p>
            <Link to="/womens"><p>Tops</p></Link>
            <Link to = "/womens"><p>Dresses & Jumpsuits</p> </Link>
            <Link to = "/womens"><p>Sportswear</p> </Link>
            <Link to = "/women"><p>Bottoms</p> </Link>
            <Link to = "/women"><p>Winterwear</p> </Link>
            <Link to = "/women"> <p>Ethnicwear</p> </Link>
            <Link to = "/womens"><p>Lingerie</p> </Link>
            <Link to = "/womens"><p>Sleepwear</p> </Link>
            <Link to = "/womens"><p>Accessories</p> </Link>
            <Link to = "/womens"><p>Shoes</p> </Link>
          </div>
          <div>
            <p><b>Men</b></p>
            <Link to="/mens"><p>Tops</p></Link>
            <Link to="/mens"><p>Bottoms</p> </Link>
            <Link to="/mens"><p>Sportswear</p> </Link>
            <Link to="/mens"><p>Winterwear</p></Link>
            <Link to="/mens"><p>Accessories</p></Link>
            <Link to="/mens"><p>Shoes</p></Link>
          </div>
          <div>
            <p><b>Boys</b></p>
            <p>Tops</p>
            <p>Bottoms</p>
            <p>Indian Wear</p>
            <p>Winter Wear</p>
            <p>Essentials</p>
            <p>Accessories</p>
            <p>Shoes</p>
          </div>
          <div>
            <p><b>Girls</b></p>
            <p>Tops</p>
            <p>Bottoms</p>
            <p>Indian Wear</p>
            <p>Winter Wear</p>
            <p>Essentials</p>
            <p>Accessories</p>
            <p>Shoes</p>
          </div>
          <div>
            <b>Explore</b>
            <p>Offers</p>
            <p>Magazine</p>
          </div>
        </div>
        <div className="list-down-div flex">
          <div>
            <b>About</b>
            <p>About us</p>
            <p>Write to us</p>
            <p>Careers</p>
            <p>Take a Tour</p>
            <p>Blog</p>
            <p>Store Locator</p>
            <p>Landmark Cares</p>
          </div>
          <div>
            <p><b>Help</b></p>
            <p>Contact us</p>
            <p>Shipping</p>
            <p>Returns Process</p>
            <p>Returns Policy</p>
            <p>Help Centre</p>
          </div>
        </div>
      </div>

      {/* <!-- social media  (sub-section of footer) --> */}
      <div id="footer-banner-social">
        <div className = "left-social-handler">
        <div className= "social-contect-uss">
            <div>
                <IoMdCall size="30px" />
            </div>
            <div>Talk To Us 1800-123-144</div>
        </div>
        <div className= "social-contect-us">
            <div>
                <MdLiveHelp size="30px" />
            </div>
            <div>help Center help maxfashion.com</div>
        </div>
        <div className= "social-contect-us">
            <div>
                <MdOutlineMailOutline size="30px" />
            </div>
            <div>Write to us help.in@maxfashion.com</div>
        </div>
    </div>
        <div className="social-flex">
          <div><a href="https://www.facebook.com/maxfashions"><FaFacebookF size="30px" /></a></div>
          <div><a href="https://twitter.com/maxfashionindia"><FaTwitter size="30px" /></a></div>
          <div><a href="https://www.instagram.com/maxfashionindia/"><FaInstagram  size ="30px"/></a></div>
        </div>
     
      </div>

      {/* <!-- copyright section (sub-section of footer)  --> */}
      <div id="copyright-div" Class="flex">
        <img src="data:image/png;base64,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" alt="max-logo" />
        <p>
          © 2022 Retail World Limited. <br />
          Terms & Conditions - Privacy Policy
        </p>
      </div>
    </div>
  </footer>
}
export default Footer;