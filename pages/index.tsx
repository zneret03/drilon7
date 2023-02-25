import React from "react"
import {
  LandingPage,
  Certificates,
  About,
  Work,
  Projects,
  Contact,
  Layout,
  WorkExperience,
} from "@components"

import { DataType } from "@lib/types.ts"

const Home = (props: DataType) => {
  const { projectInformation, noteworthProject, workExperience, certificates } =
    props?.data

  return (
    <Layout>
      <LandingPage />
      <About />
      <Work work={projectInformation} />
      <Projects projects={noteworthProject} />
      <WorkExperience jobs={workExperience} />
      <Certificates certificates={certificates} />
      <Contact />
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await fetch(
    "https://zneret03.github.io/drilon7_api/main.json"
  )
  const data = await response.json()

  return {
    props: {
      ...data,
    },
  }
}

export default Home
