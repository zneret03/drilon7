import React from "react"
import {
  LandingPage,
  Certificates,
  About,
  Featured,
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
      <Featured featured={projectInformation} />
      <Projects projects={noteworthProject} />
      <WorkExperience jobs={workExperience} />
      <Certificates certificates={certificates} />
      <Contact />
    </Layout>
  )
}

export async function getStaticProps() {
  const api: string = process.env.STATIC_API as string

  const response = await fetch(api)
  const data = await response.json()

  return {
    props: {
      ...data,
    },
  }
}

export default Home
