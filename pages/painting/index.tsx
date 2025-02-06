
import BreadCrumb from '@/components/bread-crumb'
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });
import NavBar from '@/components/nav-bar'
import ServiceData from '@/components/service-data';
import dynamic from 'next/dynamic';
import React from 'react'

export default function PaintingPage() {
    const c1 = `At Taptay Building & Civil Contractors,
    we use premium paints and employ skilled painters to ensure exceptional results.
    Our attention to detail and commitment to quality guarantees a flawless finish that enhances the beauty and value of your property`
    const c2 = `Refresh, Renew, Revitalize.
     Give your space a fresh new look with Taptay Building & Civil Contractors' painting services.
     We handle everything from surface preparation to the final coat, minimizing disruption and maximizing impact.
     Enjoy a beautifully painted space that reflects your style and personality.`

    return (
        <>
            <NavBar />
            < main className="main" >
                <BreadCrumb title='Painting' list={[{ title: "home", path: "/" },
                { title: "services", path: "/" },
                { title: 'painting' }]} />
                <ServiceData content={[c1, c2]} title={'Painting'}
                    workProgress={
                        [
                            'Interior Painting',
                            'Exterior Painting',
                            'Surface Preparation',
                            'Color Consultation',
                            'Specialty Finishes',
                            'Commercial Painting',
                            'Industrial Painting'
                        ]} />
            </main>
            < Footer />
        </>
    )
}