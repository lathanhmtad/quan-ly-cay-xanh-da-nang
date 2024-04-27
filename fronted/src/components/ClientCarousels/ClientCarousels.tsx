import Carousel from 'react-bootstrap/Carousel';

import banner1 from '../../assets/imgs/banner1.png'
import banner2 from '../../assets/imgs/banner2.png'
import banner3 from '../../assets/imgs/banner3.png'

export default function ClientCarousels() {
    return <Carousel>
        <Carousel.Item>
            <img className='w-100' src={banner1} alt='banner1'/>
        </Carousel.Item>
        <Carousel.Item>
            <img className='w-100' src={banner2} alt='banner1'/>
        </Carousel.Item>
        <Carousel.Item>
            <img className='w-100' src={banner3} alt='banner1'/>
        </Carousel.Item>
    </Carousel>
}