import BreadCrumb from '@/components/bread-crumb'
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });
import NavBar from '@/components/nav-bar'
import ServiceData from '@/components/service-data';
import dynamic from 'next/dynamic';
import React from 'react'

export default function ElectricalPage() {
    const c1 = `Taptay Building & Civil Contractors provides comprehensive electrical installation services for residential,
    commercial, and industrial buildings.
    From wiring to fixtures, we ensure safe and reliable electrical systems`

    const c2 = `
  Taptay Building & Civil Contractors offers cutting-edge electrical installation services,
  including energy-efficient lighting, smart home technology,
  and other modern solutions to meet your evolving needs`
    return (
        <>
            <NavBar />
            < main className="main" >
                <BreadCrumb title='Electrical installations' list={[{ title: "home", path: "/" },
                { title: "services", path: "/" },
                { title: 'electrical installations' }]} />
                <ServiceData content={[c1, c2]} title={'Powering Your Projects with Expertise'}
                    workProgress={
                        [
                            'Wiring & Re-wiring',
                            'Lighting Installations',
                            'Electrical Panel Upgrades',
                            'Outlet & Switch Installations',
                            'Data & Communication Cabling',
                            'Security System Installations'
                        ]} />
            </main>
            < Footer />
        </>
    )
}