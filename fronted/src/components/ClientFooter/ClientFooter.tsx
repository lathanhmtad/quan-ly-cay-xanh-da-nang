import {Link} from "react-router-dom";

import './ClientFooter.scss'
import {MdEmail, MdOutlineLocationOn} from "react-icons/md";
import {FaPhoneVolume, FaInstagram} from "react-icons/fa6";
import {CiFacebook, CiYoutube} from "react-icons/ci";

import logo from '../../assets/imgs/logo-no-background.png'
import {IoIosSend} from "react-icons/io";

export default function ClientFooter() {
    return <div className='bg-footer'>
        <div className="container">
            <footer className="pt-5 client-footer">
                <div className="row">
                    <div className="col-6 col-md-3 mb-3">
                        <h6 className='text-white border-underline'>LIÊN HỆ VỚI T&T</h6>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2 text-white">
                                <MdOutlineLocationOn className='color-yellow fs-5'/>
                                <span className='ms-2'>48 Cao Thắng, Hải Châu, Đà Nẵng</span>
                            </li>
                            <li className="nav-item mb-2 text-white">
                                <FaPhoneVolume className='color-yellow'/>
                                <span className='ms-2'>1900 1020</span>
                            </li>
                            <li className="nav-item mb-2 text-white">
                                <MdEmail className='color-yellow'/>
                                <span className='ms-2'>cayxanhT&T@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-3 mb-3">
                        <h6 className='text-white border-underline'>VỀ CHÚNG TÔI</h6>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link to='/' className="nav-link p-0">Trang chủ</Link></li>
                            <li className="nav-item mb-2"><Link to='/' className="nav-link p-0">Giới thiệu</Link>
                            </li>
                            <li className="nav-item mb-2"><Link to='/' className="nav-link p-0">Liên hệ</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-3 mb-3">
                        <h6 className='text-white border-underline'>HỖ TRỢ NGƯỜI DÂN</h6>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link to='/' className="nav-link p-0">Hướng dẫn phản
                                hồi</Link></li>
                            <li className="nav-item mb-2"><Link to='/' className="nav-link p-0">Giải quyết khiếu
                                nại</Link>
                            </li>
                            <li className="nav-item mb-2"><Link to='/' className="nav-link p-0">Cung cấp các thông tin
                                về cây xanh</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-3 mb-3">
                        <h6 className='text-white border-underline'>Kết nối với chúng tôi</h6>
                        <ul className="nav gap-3 align-items-center">
                            <li className="nav-item mb-2"><Link to='/'
                                                                className="nav-link p-0 fs-3 color-instagram"><FaInstagram/></Link>
                            </li>
                            <li className="nav-item mb-2"><Link to='/'
                                                                className="nav-link p-0 fs-3 color-facebook"><CiFacebook/></Link>
                            </li>
                            <li className="nav-item mb-2"><Link to='/'
                                                                className="nav-link p-0 fs-2 text-danger"><CiYoutube/></Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="d-flex flex-column align-items-center
                 flex-sm-row justify-content-between py-4 border-top">
                    <div>
                        <img width={200} src={logo} alt='logo'/>
                    </div>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Email của bạn"/>
                        <button className="btn btn-outline-secondary bg-primary d-flex align-items-center" type="button" id="button-addon2">
                            <IoIosSend className='text-white'/>
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    </div>
}