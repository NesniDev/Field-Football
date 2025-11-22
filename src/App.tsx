
  import { Experience } from '@components/Experience'
  import { Field } from '@components/Field'
  import { Hero } from '@components/Hero'
  import { Footer } from '@components/Footer'
  import { Tournament } from '@components/Tournament'
// import { Availability } from './components/Availability'

function App() {
  return (
    <>
    <Hero />
    {/* <Availability /> */}
    <Experience />
    <Field />
    <Tournament />
    <Footer />
    </>
  )
}

export default App
