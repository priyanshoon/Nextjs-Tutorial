import Head from 'next/head'
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
        <title>Priyanshu Prasad Gupta</title>
      </Head>
      <div className={"container mt-4"}>
        <div className={"my-4"} style={{textAlign: 'center'}}>
          <Image
          src="/images/logo.png"
          alt="Picture of the author"
          width={160}
          height={160}
          />
        </div>
        <h1 style={{fontFamily: "'Anton', sans-serif", fontSize: 50, textAlign: "center"}}>Welcome To <span style={{color: "#7C83FD"}}> ThePWorld.Club</span></h1>
        <p style={{textAlign: "center", fontSize: 20}}>I am Priyanshu Prasad Gupta a self-taught Developer and AI Enthusiast.</p>
        <div className={"album py-3"}>
          <div className={"container"}>
              <div className={"row"}>
                  <div className={"col-md-4"}>
                      <div className={"card mb-4 shadow-sm"}>
                          <Image className={"card-img-top"}
                              src="/images/articles.jpg"
                              alt="Card image cap"
                              height={230}
                              width={200} />
                          <div className={"card-body"}>
                              <h3>Articles</h3>
                              <p className={"card-text"}>This is a wider card with supporting text below as a natural lead-in to
                                  additional content. This content is a little bit longer.</p>
                              <div className={"d-flex justify-content-between align-items-center"}>
                                  <div className={"btn-group"}>
                                    <Link href="/blog">
                                      <button type="button" className={"btn btn-dark"}>View</button>
                                    </Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className={"col-md-4"}>
                      <div className={"card mb-4 shadow-sm"}>
                      <Image className={"card-img-top"}
                              src="/images/videos.jpg"
                              alt="Card image cap"
                              height={230}
                              width={200} />
                          <div className={"card-body"}>
                              <h3>Videos</h3>
                              <p className={"card-text"}>This is a wider card with supporting text below as a natural lead-in to
                                  additional content. This content is a little bit longer.</p>
                              <div className={"d-flex justify-content-between align-items-center"}>
                                  <div className={"btn-group"}>
                                    <Link href="/videos">
                                      <button type="button" className={"btn btn-dark"}>View</button>
                                    </Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className={"col-md-4"}>
                      <div className={"card mb-4 shadow-sm"}>
                      <Image className={"card-img-top"}
                              src="/images/contacts.jpg"
                              alt="Card image cap"
                              height={230}
                              width={200} />
                          <div className={"card-body"}>
                            <h3>Contact</h3>
                              <p className={"card-text"}>This is a wider card with supporting text below as a natural lead-in to
                                  additional content. This content is a little bit longer.</p>
                              <div className={"d-flex justify-content-between align-items-center"}>
                                  <div className={"btn-group"}>
                                    <Link href="/contact">
                                      <button type="button" className={"btn btn-dark"}>View</button>
                                    </Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}