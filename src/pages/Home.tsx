import { Experience } from "@components/Home/Experience"
import { Field } from "@components/Home/Field"
import { Tournament } from "@components/Home/Tournament"
import { Hero } from "@components/Home/Hero"

export const Home = () => {
  return (
    <>
      <Hero />
      <Experience />
      <Field />
      <Tournament />
    </>
  )
}