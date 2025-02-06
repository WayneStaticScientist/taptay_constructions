import BreadCrumb from '@/components/bread-crumb'
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });
import NavBar from '@/components/nav-bar'
import ServiceData from '@/components/service-data';
import dynamic from 'next/dynamic';
import React from 'react'

export default function PlumbingPage() {
    const c1 = `Taptay Building & Civil Contractors offers comprehensive plumbing services for residential,
    commercial, and industrial projects.  From installations and repairs to maintenance and renovations,
    we ensure reliable and efficient plumbing systems for your peace of mind`

    const c2 = `
  Taptay Building & Civil Contractors is synonymous with quality construction.  We use premium materials, employ skilled craftsmen, and adhere to the highest industry standards to ensure your building stands the test of time.  Our commitment to excellence is evident in every detail.
`
    return (
        <>
            <NavBar />
            < main className="main" >
                <BreadCrumb title='Plumbing' list={[{ title: "home", path: "/" },
                { title: "services", path: "/" },
                { title: 'plumbing' }]} />
                <ServiceData content={[c1, c2]} title={'Plumbing'}
                    summaryWork={" Don't let plumbing problems disrupt your life.  Taptay Building & Civil Contractors offers prompt and reliable plumbing services to keep your systems flowing smoothly"}
                    workProgress={
                        [
                            'Installations',
                            'repairs',
                            'maintenance',
                            'renovations',
                            'leak detection'
                        ]} />
            </main>
            < Footer />
        </>
    )
}