import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ShopNavBar from './ShopNavBar';
import Home from './../components/Home';
import ElectronicSection from '../components/electronic/ElectronicSection';
import Clothing from '../components/clothing/ClothingSection';
import FurnitureSection from '../components/furniture/FurnitureSection';
import PageNotFound from '../components/PageNotFound';
import MobileSection from '../components/electronic/mobiles/MobileSection';
import LaptopSection from '../components/electronic/laptops/LaptopSection';
import TvSection from '../components/electronic/televisions/TvSection';
import MobileGallery from '../components/electronic/mobiles/MobileGallery';
import MensSection from '../components/clothing/mens/MensSection';
import WomensSection from '../components/clothing/womens/WomensSection';
import KidsSection from '../components/clothing/kids/KidsSection';
import WardRobesSection from '../components/furniture/wardrobe/WardRobesSection';
import SofaSection from '../components/furniture/sofa/SofaSection';
import BedsSection from '../components/furniture/beds/BedsSection';
import MobileDetail from '../components/electronic/mobiles/MobileDetail';
import LaptopGallery from '../components/electronic/laptops/LaptopGallery';
import LaptopDetail from '../components/electronic/laptops/LaptopDetail';
import TvGallery from '../components/electronic/televisions/TvGallery';
import TvDetail from '../components/electronic/televisions/TvDetail';
import WardrobeGallery from '../components/furniture/wardrobe/WardrobeGallery';
import WardrobeDetail from '../components/furniture/wardrobe/WardrobeDetail';
import SofaGallery from '../components/furniture/sofa/SofaGallery';
import SofaDetail from '../components/furniture/sofa/SofaDetail';
import BedGallery from '../components/furniture/beds/BedGallery';
import BedDetail from '../components/furniture/beds/BedDetail';
import LoginRegister from '../components/login_register/LoginRegister';
import MensClothGallery from '../components/clothing/mens/MensClothGallery';
import MensClothDetails from '../components/clothing/mens/MensClothDetails';
import WomensClothGallery from '../components/clothing/womens/WomensClothGallery';
import WomenClothDetails from '../components/clothing/womens/WomenClothDetails';
import KidClothGallery from '../components/clothing/kids/KidClothGallery';
import KidClothDetail from '../components/clothing/kids/KidClothDetail';
import ShoppingCart from '../components/ShoppingCart';

//router component which contains route definations
const ShopRouter = ()=>{
return(
<BrowserRouter>
  <Routes>
    <Route path='/' element={<ShopNavBar/>}>
    {/**Child routes */}
       <Route index element={<Home/>}/>
       <Route path='elec' element={<ElectronicSection/>}>
       {/* Child route of electronic*/}
       <Route path='mobiles' element={<MobileSection/>}>
       {/* Child route of mobiles route*/}
       <Route path='' element={<MobileGallery/>}/>
       <Route path='detail/:mb1Id' element={<MobileDetail/>}/>
       </Route>
       <Route path='laptops' element={<LaptopSection/>}>
       {/* Child route of laptop route*/}
       <Route path='' element={<LaptopGallery/>}/>
       <Route path='details/:lt1Id' element={<LaptopDetail/>}/>
       </Route>
       <Route path='tvs' element={<TvSection/>} >
       {/* Child route of tv route*/}
       <Route path='' element={<TvGallery/>}/>
       <Route path='detail/:tv1Id' element={<TvDetail/>}/>
       </Route>
       </Route>
       <Route path='cloths' element={<Clothing/>}>
       <Route path='mens' element={<MensSection/>}>
        {/* Child route of mens route*/}
        <Route path='' element={<MensClothGallery/>}/>
        <Route path='detail/:men1Id' element={<MensClothDetails/>}/>
        </Route>
       <Route path='womens' element={<WomensSection/>}>
       {/* Child route of mens route*/}
       <Route path='' element={<WomensClothGallery/>}/>
       <Route path='detail/:women1Id' element={<WomenClothDetails/>}/>
       </Route>
       <Route path='kids' element={<KidsSection/>}>
        {/* Child route of mens route*/}
        <Route path='' element={<KidClothGallery/>}/>
        <Route path='detail/:kid1Id' element={<KidClothDetail/>}/>
       </Route> 
       </Route>
       <Route path='furniture' element={<FurnitureSection/>}>
       <Route path='wardrobes' element={<WardRobesSection/>}>
       {/* Child route of wardrobe route*/}
       <Route path='' element={<WardrobeGallery/>}/>
       <Route path='detail/:wardrobe1Id' element={<WardrobeDetail/>}/>
       </Route>
       <Route path='sofas' element={<SofaSection/>}>
       {/* Child route of sofa route*/}
       <Route path='' element={<SofaGallery/>}/>
       <Route path='detail/:sofa1Id' element={<SofaDetail/>}/>
       </Route>
       <Route path='beds' element={<BedsSection/>}>
       {/* Child route of beds route*/}
       <Route path='' element={<BedGallery/>}/>
       <Route path='detail/:bed1Id' element={<BedDetail/>}/>
       </Route>
       </Route>
       <Route path='login_reg' element={<LoginRegister/>}/>
       <Route path='shopping_cart' element={<ShoppingCart/>}/>
       <Route path='*' element={<PageNotFound/>}/>
    </Route>
  </Routes>
</BrowserRouter>
);
}
export default ShopRouter;