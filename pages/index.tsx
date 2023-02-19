import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>SaintSpace</title>
        <meta name="description" content="Church Management Tech Revival" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous'/>
        <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300;0,400;0,700;1,900&display=swap" rel="stylesheet"></link>
      </Head>
      <div className="header-bar">
            <div className="header-title">
                SaintSpace
            </div>    
        </div>
        <div className="headline">
            Church Management Tech Revival
        </div>
        <div className="tagline-container">
            <div className="tagline">
                Say goodbye to clunky, outdated church management systems and unleash the power of modern technology. We&apos;re building the next generation of cloud software to revolutionize the way you run your church.
            </div>
        </div>
        {/* <div class="form-container">
            <div id="subscribe-form">
                <form action="#">
                  <input type="email" placeholder="Enter your email address">
                  <button type="submit">Keep me updated</button>
                </form>
              </div>
        </div>*/}
    </>
  )
}