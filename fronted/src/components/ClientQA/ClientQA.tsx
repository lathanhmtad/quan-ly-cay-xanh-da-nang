import { AiFillPlusSquare } from "react-icons/ai";
import "./ClientQA.scss"
export default function ClientQA() {
    return <div className="qa-container">
        <img src={require('../../assets/imgs/image 51.png')} alt="" className="qa-image" />
        <div className="qa-content">
            <h1 style={{ color: '#224D31', textAlign: 'center' }}>HỎI & ĐÁP</h1>
            <div className="divider text-center">
                <span className="leaf-icon">&#127806;</span>
            </div>
            <div className="qa-question">
                <AiFillPlusSquare className="plus-icon" />
                <span className="qa-question-content">Các bước để liên hệ, khiếu nại với trung tâm?</span>
            </div>
            <div className="qa-question">
                <AiFillPlusSquare className="plus-icon" />
                <span className="qa-question-content">Thời gian để được nhận phản hồi và xử lý?</span>
            </div>
        </div>
    </div>
}
