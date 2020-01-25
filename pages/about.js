import Head from 'next/head'

function AboutPage() {
  return (
    <div>
      <Head>
        <meta property="fb:app_id" content="1552358151700561" />
        <meta property="og:url" content="http://www.digitalvillage.me:3000/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Using an official buildpack" />
        <meta property="og:description" content="If Heroku’s auto-detection of buildpacks is not sufficient, or if you need multiple buildpacks " />
        <meta property="og:image"
          content="https://images.pexels.com/photos/3326362/pexels-photo-3326362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="" data-react-helmet="true" />
        <meta name="twitter:creator" content="" data-react-helmet="true" />
        <meta name="twitter:title" content="Using an official buildpack" />
        <meta name="twitter:description" content="If Heroku’s auto-detection of buildpacks is not sufficient, or if you need multiple buildpacks " />
        <meta name="twitter:image"
          content="https://images.pexels.com/photos/3326362/pexels-photo-3326362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
      </Head>
      <div>About</div>

      <img src="https://images.pexels.com/photos/3326362/pexels-photo-3326362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="share" />
    </div>
  )
}

export default AboutPage