import React from 'react'

export default function BreadCrumb({ title, list }: { title: string, list: { title: string, path?: string | null }[] }) {
    return (
        <>
            <div className="site-breadcrumb" style={{ background: "url(assets/img/breadcrumb/01.jpg)" }}>
                <div className="container">
                    <h2 className="breadcrumb-title">{title}</h2>
                    <ul className="breadcrumb-menu">
                        {list.map((e, i) => {
                            if (e.path) {
                                return (<li key={i}><a href={e.path}>{e.title}</a></li>)
                            }
                            return <li key={i} className="active">{e.title}</li>
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}
