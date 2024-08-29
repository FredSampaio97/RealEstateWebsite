import HomeBanner1 from './lisbon2.jpg'
import HomeBanner2 from './BannerCentro.jpg'
import HomeBanner3 from './porto2.jpg'
import AboutBanner from './BannerQuemSomos.jpg'
import ContactsBanner from './BannerContactos.jpg'
// import NewsBanner from './BannerNoticias.jpg'
import ProjectsBanner from './BannerEmp.jpg'
import SpotlightBanner from './BannerDestaques.jpg'
import VacationBanner from './BannerCentro.jpg'
import projectBanner from './BannerSocios.jpg'

interface bannerHome {
    banner: string;
}

// Home page banners
export const bannersHome: bannerHome[] = [
    { banner: HomeBanner1 },
    { banner: HomeBanner2 },
    { banner: HomeBanner3 }
];

interface bannersAll {
    banner: string;
    page: string;
}

// Banners for other pages
export const bannersAll: bannersAll[] = [
    { page: '/about', banner: AboutBanner },
    { page: '/news', banner: projectBanner },
    { page: '/contacts', banner: ContactsBanner },
    { page: '/projects', banner: ProjectsBanner },
    { page: '/project', banner: projectBanner },
    { page: '/spotlight', banner: SpotlightBanner },
    { page: '/vacation', banner: VacationBanner }
];
