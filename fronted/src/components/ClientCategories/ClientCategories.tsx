import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./ClientCategories.scss"
import { CiCirclePlus } from 'react-icons/ci';
import { FaCirclePlus } from 'react-icons/fa6';

const treeCategories: {
    id: number,
    name: string,
    image: string
}[] = [
        {
            id: 1,
            name: 'Cây gỗ lớn',
            image: 'image 26.png'
        },
        {
            id: 2,
            name: 'Cây bụi và cây cỏ',
            image: 'image 21.png'
        },
        {
            id: 3,
            name: 'Cây bóng mát',
            image: 'image 23.png'
        },
        {
            id: 4,
            name: 'Cây cảnh quan',
            image: 'image 25.png'
        },
        {
            id: 5,
            name: 'Cây công viên',
            image: 'image 29.png'
        },
        {
            id: 6,
            name: 'Cây ven biển',
            image: 'image 31.png'
        },
        {
            id: 7,
            name: 'Cây trang trí đô thị',
            image: 'image 32.png'
        },
        {
            id: 8,
            name: 'Cây rừng',
            image: 'image 23.png'
        }
    ]

export default function ClientCategories() {
    return <div>
        <h1 className='text-center' style={{ color: '#224D31', marginTop: 100 }}>DANH MỤC CÂY</h1>
        <div className="divider text-center">
            <span className="leaf-icon">&#127806;</span>
        </div>
        <div className="tree-categories">
            {treeCategories.map((value) => {
                return <div className="tree-category" key={value.id}>
                    <img src={require(`../../assets/imgs/${value.image}`)} alt="" className="category-image" />
                    <span className="category-name">
                        <FaCirclePlus className='plus-icon' />
                        {value.name}
                    </span>
                </div>
            })}
        </div>
        <div className="commercials">
            <div className="commercial-item">
                <img src={require('../../assets/imgs/plant.png')} alt="" className="commercial-image-1" />
                <img src={require('../../assets/imgs/plant (1).png')} alt="" className="commercial-image-2" />
                <span className="commercial-title">Nguồn cây dồi dào</span>
                <span className="commercial-content">Dồi dào cây xanh - Nguồn cung cấp đa dạng và đáng tin cậy cho quản lý cây xanh</span>
            </div>
            <div className="commercial-item">
                <img src={require('../../assets/imgs/authenticity.png')} alt="" className="commercial-image-1" />
                <img src={require('../../assets/imgs/authenticity (1).png')} alt="" className="commercial-image-2" />
                <span className="commercial-title">Chất lượng bảo đảm</span>
                <span className="commercial-content">Chất lượng cây xanh đảm bảo - Sức sống vững chắc cho môi trường xanh</span>
            </div>
            <div className="commercial-item">
                <img src={require('../../assets/imgs/rating (1).png')} alt="" className="commercial-image-1" />
                <img src={require('../../assets/imgs/rating.png')} alt="" className="commercial-image-2" />
                <span className="commercial-title">Kinh nghiệm lâu năm</span>
                <span className="commercial-content">Đội ngũ nhân sự tận tâm, am hiểu và dày dặn kinh nghiệm trong lĩnh vực cây xanh</span>
            </div>
        </div>
    </div>
}