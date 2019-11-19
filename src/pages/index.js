import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Typed from "react-typed"
import { Images } from "../theme"

const IndexPage = () => (
  <Layout>
    <SEO title="Jesse K" />
    <div className="box">
        <div className="boxbg"><Image /></div>
        <div className="boxfront" style={{backgroundImage: `url(${Images.xxx})`}}>
            <div className="fx fxdr fxaic fxjcfs">
                <div className="w50 pd15">
                  <h1><Typed
                strings={['Jesse Kyalo is a Kenyan director and one of the most recognized filmmakers in Africa.']}
                  typeSpeed={45}
                  startDelay={800}
                  showCursor={false}
                  smartBackspace={true}
                  // backSpeed={30}
                  // backDelay={400}
                  // loopCount={2}
                  // loop
                  // cursorChar={'📌'}
              /></h1>
                </div>
                </div>
                <div className="w100 btm pd15">
                  <div className="rit">
                    <ul>
                      <li><strong>CONTACT</strong></li>
                      {/* <li><strong>Phone:</strong>
                        <a href="tel:+254723924521"> +254 723 924 521</a>
                      </li> */}
                      <li><strong>Email:</strong>
                        <a href="mailto:info@jessekyalo.com" target="_blank" rel="noopener noreferrer"> info@jessekyalo.com</a>
                      </li>
                      <li><strong>Social media</strong></li>
                      <li>
                        <a href="https://www.instagram.com/sirjessek/" target="_blank" rel="noopener noreferrer">
                          @sirjessek
                        </a> – Instagram</li>
                      <li>
                      <a href="https://twitter.com/JesseKyalo" target="_blank" rel="noopener noreferrer">
                        @JesseKyalo
                        </a> – Twitter</li>
                      <li>
                      <a href="https://www.facebook.com/Jesse-K" target="_blank" rel="noopener noreferrer">
                        Jesse K 
                        </a>– Facebook</li>
                    </ul>
                  </div>
                </div>
        </div>

    </div>
  </Layout>
)

export default IndexPage
