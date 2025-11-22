import { Experience } from "@components/Experience"
import { Field } from "@components/Field"
import { Tournament } from "@components/Tournament"
import { Hero } from "@components/Hero"

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