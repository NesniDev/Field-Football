import { Experience } from "@/components/Home/Experience"
import { FieldMain } from "@/components/Home/Field"
import { OfferCard } from "@/components/Home/OfferCard"
import { HomeTournament } from "@/components/Home/Tournament"
export const Home = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <Experience />
      <FieldMain />
      <HomeTournament />
      <OfferCard/>
    </div>
  )
}