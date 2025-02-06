
import BreadCrumb from '@/components/bread-crumb'
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });
import NavBar from '@/components/nav-bar'
import ServiceData from '@/components/service-data';
import dynamic from 'next/dynamic';
import React from 'react'

export default function BuildingPage() {
    const c1 = `Taptay Building Your Partner in Construction Excellence.
We offer a comprehensive range of construction services tailored to your specific needs`
    const c2 = `
 From initial site surveys and land clearing to complex earthmoving and infrastructure development, we lay the foundation for your project's success.
Building Construction: Whether you're building a custom home, a commercial complex, or an industrial facility, we have the expertise and resources1 to deliver exceptional results.   

`
    const c3 = `Transform your existing space with our renovation services. We handle everything from minor updates to major overhauls, increasing functionality and value.
Specialized Services: Our skilled craftsmen provide specialized services, including foundation construction, precision tiling, custom carpentry, and more.`
    return (
        <>
            <NavBar />
            <main className="main">
                <BreadCrumb title='building' list={[{ title: "home", path: "/" }, { title: "services", path: "/" }, { title: 'building' }]} />
                <ServiceData content={[c1, c2, c3]} title={'Building'}
                    workProgress={['land clearing', 'land surveying', 'sm build']} />
            </main>
            <Footer />
        </>
    )
}