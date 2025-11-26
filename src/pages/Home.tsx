import { Experience } from "@/components/Home/Experience"
import { Field } from "@/components/Home/Field"
import { Tournament } from "@/components/Home/Tournament"
export const Home = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <Experience />
      <Field />
      <Tournament />
    </div>
  )
}