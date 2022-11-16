import { Outlet } from "react-router-dom"
import { Search } from "../components/Search"

const Layout = () => {
  return (
    <article>
      <Search/>
      <section>
        <Outlet/>
      </section>
    </article>
  )
}

export { Layout }