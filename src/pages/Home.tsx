import { Experience } from "@/components/Home/Experience"
import { Field } from "@/components/Home/Field"
import { OfferCard } from "@/components/Home/OfferCard"
import { HomeTournament } from "@/components/Home/Tournament"
export const Home = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <Experience />
      <Field />
      <HomeTournament />
      <OfferCard/>
    </div>
  )
}