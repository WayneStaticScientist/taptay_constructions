import BreadCrumb from '@/components/bread-crumb'
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });
import NavBar from '@/components/nav-bar'
import ServiceData from '@/components/service-data';
import dynamic from 'next/dynamic';
import React from 'react'

export default function TilingPage() {
    const c1 = `Taptay Building & Civil Contractors offers professional tiling services for floors, walls, and more. We bring artistry and precision to every project, creating beautiful and durable surfaces.`

    const c2 = `From classic ceramic to modern porcelain and natural stone, Taptay Building & Civil Contractors installs a wide variety of tile materials. We can help you choose the perfect tile to complement your design vision.`
    const c3 = `Our experienced tile setters at Taptay Building & Civil Contractors pay meticulous attention to detail, ensuring flawless tile installations. We create smooth, even surfaces that enhance the beauty and value of your space`;
    return (
        <>
            <NavBar />
            < main className="main" >
                <BreadCrumb title='Tiling and Capentry' list={[{ title: "home", path: "/" },
                { title: "services", path: "/" },
                { title: 'tiling_and_capentry' }]} />
                <ServiceData content={[c1, c2, c3]} title={'Tiling and Capentry'}
                    workProgress={
                        [
                            'Floor Tiling',
                            'Wall Tiling',
                            'Tile Selection & Design',
                            'Grouting & Sealing',
                            'Tile Repair & Replacement',
                        ]} />
            </main>
            < Footer />
        </>
    )
}