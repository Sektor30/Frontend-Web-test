import React from 'react'
import Banner from '../../components/ui/HomeBanner/Banner'
import Eventos from '../../components/ui/HomeEventos/Eventos'
import Homemenu from '../../components/ui/HomeMenu/Homemenu'
import Comments from '../../components/ui/HomeReseñas/Comments'
import Restaurante from '../../components/ui/HomeRestaurante/Restaurante'

import Contact1 from '../contactP/Contact1'

function HomePage() {
    return (
        <div>
            <Banner/>
            <Restaurante/>
            <Homemenu />
            <Eventos />
            <Contact1 />
            <Comments />
            
        </div>
    )
}

export default HomePage
