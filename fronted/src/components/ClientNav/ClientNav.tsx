import logo from '../../assets/imgs/logo-no-background.png'
import { Link } from "react-router-dom"
import Search from "antd/es/input/Search"

export default function ClientNav() {
    return <div className='bg-header'>
        <div className='container'>
            <div className='navigation d-flex align-items-center justify-content-between'>
                <div>
                    <img style={{ scale: '1.5' }} width={100} src={logo} alt='logo' />
                </div>

                <ul className='d-flex align-items-center list-unstyled gap-5 mb-0'>
                    <li>
                        <Link style={{ fontWeight: '500', fontSize: '17px' }} className='text-white' to='/'>Trang chủ</Link>
                    </li>
                    <li>
                        <Link style={{ fontWeight: '500', fontSize: '17px' }} className='text-white' to='/gioi-thieu'>Giới thiệu</Link>
                    </li>
                    <li>
                        <Link style={{ fontWeight: '500', fontSize: '17px' }} className='text-white' to='/lien-he'>Liên hệ</Link>
                    </li>
                    <li>
                        <Link style={{ fontWeight: '500', fontSize: '17px' }} className='text-white' to='/quy-dinh'>Quy định</Link>
                    </li>
                </ul>

                <div style={{ width: '30%' }}>
                    <Search placeholder="Tìm kiếm" size="large" />
                </div>

            </div>
        </div>
    </div>
}