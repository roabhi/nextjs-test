import Navigation from '../components/Navigation'
import FormPost from '../components/Form'

const getPosts = async () => {
  //If we fetch from a server component we need to use the full url for some reason
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`)
  if (!res.ok) {
    console.log(res)
  }
  return res.json()
}

const Home = async () => {
  const data: { id: number; title: string }[] = await getPosts()
  return (
    <>
      <Navigation />
      <main className="container mx-auto mt-[5rem]">
        <h1 className="text-center text2xl font-bold uppercase">
          &bull; The main page &bull;
        </h1>
        <FormPost />
        <section className="pb-[3rem]">
          <h3 className="mt-[3rem] font-semibold text-center text-white">
            Recent posts
          </h3>
          <ul className="list-decimal pl-5">
            {data.map((post) => (
              <li className="mt-[3rem] text-xl" key={post.id}>
                {post.title}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}

export default Home
