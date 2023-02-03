import React, {useState} from 'react'
import "./HomePage.css"
import ImageSlider from './ImageSlider'
import {Link} from "react-router-dom";
import { Heading,Box,Img } from '@chakra-ui/react';

const HomePage = () => {

  return (
    <>
    <div className="blue-box" >
        Free shipping on All Orders + Extra ₹ 200+ off. code MAX200.
    </div>
    
    <div className="slide-show">
         <ImageSlider  />   
    </div>

    <div style={{margin:"auto",width:"80%",marginTop:"40px" }}>
      <img src="/images/freecoupen.png" alt="coupen" />
    </div>
     
     <div style={{display:"flex", gap:"30px", margin:"auto",width:"90%",marginTop:"40px" }}>
        <Link to="/womens"><img src="/images/fastive.png" /></Link>
         <img src="/images/celebrate.png" style={{width:"50%"}} />
     </div>
      <hr style={{marginTop:"40px"}}/>
      <Box mt="40px">
           <Heading ml="40px" fontWeight={500}>Shop By Category</Heading>
           {/* <!-- catagory list  --> */}
      <div id="catogary_container">
        <div className="cattitle">
        </div>
        <div id="content">
          <div>
            <div className="wcat" onclick="window.location.href='women_kurti.html'">
              <img
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-A-5-Desktop-Women-14Feb2022.jpg"
              />
              <p>Kurtis and kurtas</p>
            </div>

            <div className="wcat" onclick="window.location.href='womentops.html'" >
              <img
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-A-1-Desktop-Women-14Feb2022.jpg"
             
              />
              <p>Tops & Teens</p>
            </div>

            <div className="wcat">
              <img
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-A-2-Desktop-Women-14Feb2022.jpg"
              />
              <p>Dresses</p>
            </div>

            <div className="wcat">
              <img
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-A-3-Desktop-Womenn-14Feb20222.jpg"
              />
              <p>Winter wear</p>
            </div>

            <div className="wcat">
              <img
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-A-4-Desktop-Women-14Feb2022.jpg"
       
              />
              <p>Bottoms</p>
            </div>

            <div id="kurta" className="wcat">
              <img
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-A-6-Desktop-Women-14Feb2022.jpg"
              />
              <p>Suits & Sets</p>
            </div>
          </div>

          <div>
            <div className="wcat">
              <img
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-A-7-Desktop-Women-14Feb2022.jpg"
              />
              <p>Fusion Dresses</p>
            </div>

            <div className="wcat">
              <img
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-A-8-Desktop-Women-14Feb2022.jpg"
              />
              <p>Ethnic Bottoms</p>
            </div>

            <div className="wcat">
              <img
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-A-9-Desktop-Women-14Feb2022.jpg"
              />
              <p>Sleepwear</p>
            </div>

            <div className="wcat">
              <img
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-A-10-Desktop-Women-14Feb2022.jpg"
              />
              <p>Activewear</p>
            </div>

            <div className="wcat">
              <img
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-A-11-Desktop-Women-14Feb2022.jpg"
              />
              <p>Lingerie</p>
            </div>

            <div className="wcat">
              <img
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-A-12-Desktop-Women-14Feb2022.jpg"
              />
              <p>Ads On</p>
            </div>
          </div>
        </div>
      </div>
      </Box>
      <Link to="/boys"><Box m="auto" mt="40px" display="flex"w="90%">
        <img src="https://lmsin.net/cdn-cgi/image/w=616,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock-oneBythree-D-Women-18Feb2022.jpg"/>
        <img src="https://lmsin.net/cdn-cgi/image/w=616,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-5modularblock-oneBytwo1D-Women-18Feb2022.jpg" />
      </Box></Link>
       <Heading ml="30px" mt="40px" fontWeight={500}>Relaxed Wide Legs</Heading>
      <Link to="/womens"><Box m="auto" mt="40px" display="flex"w="90%">
        <img src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock-oneBythree-D-Women-18Aug2022A.png"/>
        <img src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-5modularblock-oneBytwo1D-Women-18Aug2022.png" />
      </Box></Link>
   
      <Heading ml="30px" mt="40px" fontWeight={500}>Budget Zone</Heading>
      <Link to="/womens"><Box m="auto" mt="40px" display="flex"w="92%">
        <Img w="400px" src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-modularblock19One-Women-18JULY2022.png"/>
        <Img w="400px" src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-modularblock19Two-Women-18JULY2022.png" />
        <Img w="400px" src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-modularblock19Three-Women-18JULY2022.png" />
      </Box></Link>

      <Heading ml="30px" mt="40px" fontWeight={500}>Trends</Heading>
      <Link to="/womens"><Box m="auto" mt="40px" display="flex"w="90%">
        <img src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock7-oneBythree-A-Women-11Aug2022.png"/>
        <img src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock7-oneBythree-B-Womenn-11Aug2022.png" />
      </Box></Link>


      <Heading ml="30px" mt="40px" fontWeight={500}>Top Stores</Heading>
      <Link to="/womens"><Box m="auto" mt="40px" display="flex"w="90%">
        <img src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-modularblock15One-Women-02JUNE2022.png"/>
        <img src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-modularblock15Two-Women-02JUNE2022.png" />
    
      </Box></Link>

  
      <Link to="/womens"><Box m="auto" mt="40px" display="flex"w="90%">
        <img src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-modularblock16One-Women-28JULY2022.png"/>
        <img src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-modularblock16Two-Women-28JULY2022.png" />
      </Box></Link>

      <Link to="/womens"><Box m="auto" mt="40px" display="flex"w="90%">
        <img src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-9modularblock-oneBythree-A-Women-18JULY2022.png"/>
        <img src="" />
      </Box></Link>


      <Heading ml="30px" mt="40px" fontWeight={500}>Gifting Zone</Heading>
      <a href= "https://www.woohoo.in/max-online-e-gift-instant-voucher"><Box m="auto" mt="40px" display="flex"w="90%">
        <img src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/desktop-modularblock14One-Women-26Oct2021.jpg" />
      </Box></a>
    
      <Heading ml="30px" mt="40px" fontWeight={500}>Connect With Us</Heading>
      <a href="https://api.whatsapp.com/send?phone=916366874274&text=I%20would%20like%20to%20sign-up%20to%20receive%20updates%20from%20Max%20Fashion"><Box m="auto" mt="40px" display="flex"w="90%">
        <img src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock8-oneBythree-A-Women-21Oct2020.jpg" />
      </Box></a>


    </>
    
  )
}

export default HomePage