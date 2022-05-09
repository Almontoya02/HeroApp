import { Routes, Route } from "react-router-dom";

import { MarvelScreen } from './../components/marvel/MarvelScreen';
import { DcScreen } from './../components/dc/DcScreen';
import { SearchCreen } from './../components/search/SearchCreen';
import { Navbar } from './../components/ui/Navbar';
import { Hero } from './../components/hero/Hero';
export const DashboardRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className="container mt-2">
          <Routes>
              <Route path="/marvel" element={<MarvelScreen />} />
              <Route path="/dc" element={<DcScreen/>} />
              <Route path="/search" element={<SearchCreen />} />
              <Route path="/hero/:heroId" element={<Hero/>} />
              <Route path="/" element={<MarvelScreen />} />
          </Routes>
        </div>
    </>
  )
}
