import { MdEmail, MdOutlineLocationOn } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

export default function ClientTopBar() {
    return <div className='py-3'>
        <div className='container'>
            <div className='topbar d-flex justify-content-between align-items-center'>
                <div>
                    <span style={{ color: '#4C546A', fontWeight: '500' }} className='d-flex align-items-center gap-2'>
                        <MdOutlineLocationOn style={{ color: '#4C546A', fontWeight: '500', fontSize: '20px' }} />
                        48 Cao thắng, Hải Châu, Đà Nẵng
                    </span>
                </div>
                <div className='d-flex align-items-center gap-4'>
                    <span style={{ fontWeight: 500 }} className='d-flex align-items-center gap-1'>
                        <FaPhoneVolume />
                        1900 1020
                    </span>
                    <span style={{ fontWeight: 500 }} className='d-flex align-items-center gap-1'>
                        <MdEmail />
                        cayxanhT&T@gmail.com
                    </span>
                </div>
                <div style={{ backgroundColor: '#BFA067', position: 'absolute', zIndex: '-1', width: 400, height: 54, right: 0 }}></div>
                <div style={{ position: 'absolute', right: 400, borderWidth: 28, borderColor: 'transparent', borderRightColor: '#BFA067', borderBottomColor: '#BFA067', borderStyle: 'solid', top: '-2px' }}></div>
            </div>
        </div>
    </div>
}