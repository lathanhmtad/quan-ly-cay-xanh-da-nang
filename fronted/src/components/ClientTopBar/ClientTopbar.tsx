import {MdEmail, MdOutlineLocationOn} from "react-icons/md";
import {FaPhoneVolume} from "react-icons/fa6";

export default function ClientTopBar() {
    return <div className='py-3 bg-dark-subtle'>
        <div className='container'>
            <div className='topbar d-flex justify-content-between align-items-center'>
                <div>
                    <span className='d-flex align-items-center'>
                        <MdOutlineLocationOn/>
                        48 Cao thắng, Hải Châu, Đà Nẵng
                    </span>
                </div>
                <div className='d-flex align-items-center gap-4'>
                    <span className='d-flex align-items-center'>
                        <FaPhoneVolume/>
                        1900 1020
                    </span>
                    <span className='d-flex align-items-center'>
                        <MdEmail/>
                        cayxanhT&T@gmail.com
                    </span>
                </div>
            </div>
        </div>
    </div>
}