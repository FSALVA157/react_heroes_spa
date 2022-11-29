import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components"
import { MarvelPage, DCPage, SearchHero, HeroPage } from "../pages"


export const HeroesRoutes = () => {
  return (
        <>
        <Navbar></Navbar>
        <div className="container mt-3">
        <Routes>
          <Route path="marvel" element={ <MarvelPage/> } />
          <Route path="dc" element={ <DCPage/> } />        
          <Route path="search" element={ <SearchHero/> } />
          <Route path="hero/:id" element={ <HeroPage/> } />           
                    
          <Route path="/*" element={<Navigate to="/marvel"/>} />
        </Routes>
        </div>
        </>
  )
}
