import Navigation from '../../components/Navigation'

const AboutPage = () => {
  return (
    <>
      <Navigation />
      <main className="container mx-auto mt-[5rem]">
        <h1 className="text-center text2xl font-bold uppercase">
          &bull; The about page &bull;
        </h1>
        <p className="mt-8 font-sans text-center">
          This is just a simple exercice to test Nextjs v.13 and its new
          features
        </p>
      </main>
    </>
  )
}

export default AboutPage
