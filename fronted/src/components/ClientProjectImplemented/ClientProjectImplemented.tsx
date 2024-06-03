import "./ClientProjectImplemented.scss"
const projects: {
    id: number,
    content: string,
    image: string
}[] = [
        {
            id: 1,
            content: 'Trồng cây Công viên 29/3',
            image: 'image 37.png'
        },
        {
            id: 2,
            content: 'Trồng cây tuyến đường Nguyễn Văn Linh',
            image: 'image 40.png'
        },
        {
            id: 3,
            content: 'Trồng cây Công viên Thanh Niên',
            image: 'image 39.png'
        }
    ]
export default function ClientProjectImplemented() {
    return <div style={{ margin: '100px' }}>
        <h1 className='text-center' style={{ color: '#224D31' }}>DỰ ÁN ĐÃ THỰC HIỆN</h1>
        <div className="divider text-center">
            <span className="leaf-icon">&#127806;</span>
        </div>
        <div className="projects">
            {projects.map((value) => {
                return <div key={value.id} className="project-item">
                    <img src={require(`../../assets/imgs/${value.image}`)} alt="" className="project-image" />
                    <span className="project-title">{value.content}</span>
                </div>
            })}
        </div>
        <div className="pagi-bars">
            <div className="pagi-bar-item"></div>
            <div className="pagi-bar-item"></div>
        </div>
    </div>
}