import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import Banner from "../components/banner"

const About = () => {
  const images = useStaticQuery(graphql`{
  banner: file(
    relativePath: {eq: "banners/CS-Studio-Keyvisual_banner_8_darker.png"}
  ) {
    childImageSharp {
      gatsbyImageData(quality: 100, layout: FULL_WIDTH)
    }
  }
}`)

  return (
    <Layout>
      <SEO title="Services" />
      <Banner
        imageFluid={images.banner.childImageSharp.gatsbyImageData}
        text="Services"
      />
      <Container style={{ marginTop: `2rem` }}>
        {/** Alarm Services **/}
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Alarm Services</h2>
        <p>
          Alarm Services info to be completed. 
        </p>
        {/** Channel Finder */}
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Channel Finder Service</h2>
        <p>
          Channel Finder info to be completed.
        </p>
        {/** Logbook Service**/}
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Logbook Service</h2>
        <p>
            Info on Logbook service to be completed.
        </p>
        {/** PV Archiver */}
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>PV Archiver</h2>
        <p>
          Info on PV Archiver to be completed.
        </p>
        {/** PV Websocket */}
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>PV Web Socket</h2>
        <p>
          Info on PV Websocket to be completed.
        </p>
        {/** Save & Restore */}
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Save & Restore Service</h2>
        <p>
          Info on Save&Restore to be completed.
        </p>
        {/** Scan */}
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Scan Server</h2>
        <p>
          The scan system can automate experiments by running scans on a central server.
          For example, it can move a motor from some start position to an end position in certain steps,
          waiting at each step until experiment data has been taken. A scan can
          consist of several nested loops. For example, at each step of moving
          the "horizontal" position of a sample, an inner loop can vary the
          "vertical" position of the sample to perform a 2-dimensional scan of
          the sample surface. As another example, an outer loop may vary the
          sample temperature while inner loops vary the sample position.
        </p>
        <p>
          By running the scans on a central server, there are less worries that a script gets
          cancelled accidentally on a client machine and all the logs and history of scans can
          be easily accessed by system experts.
        </p>
        <p>
          <a href="http://htmlpreview.github.io/?https://github.com/ControlSystemStudio/cs-studio/blob/master/applications/scan/scan-plugins/org.csstudio.scan.ui/doc/scansystem.html">
            Read more
          </a>
        </p>
        
      </Container>
    </Layout>
  );
}

export default About
