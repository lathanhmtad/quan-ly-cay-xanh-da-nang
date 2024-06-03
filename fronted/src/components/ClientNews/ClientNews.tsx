import "./ClientNews.scss"
const news: {
    id: number,
    content: string,
    image: string
}[] = [
        {
            id: 1,
            content: 'Cây xanh Đà Nẵng hưởng ứng ra quân "Tết trồng cây" năm 2024',
            image: 'image 47-1.png'
        },
        {
            id: 2,
            content: 'Chợ hoa Tết Giáp Thìn năm 2024',
            image: 'image 47.png'
        },
        {
            id: 3,
            content: 'Chợ hoa Tết trang trí để phục vụ dịp Tết Nguyên Đán Giáp Thìn năm 2024',
            image: 'image 48.png'
        }
    ]
export default function ClientNews() {
    return <div style={{ position: 'relative', paddingTop: '20px', paddingBottom: '20px' }}>
        <div style={{ backgroundColor: '#C0D7AF', width: '100vw', height: '120%', zIndex: '-1', position: 'absolute', left: 'calc(((100vw - 1320px + 24px) / 2) * -1)', top: '-20px' }}></div>
        <h1 className='text-center' style={{ color: '#224D31', marginTop: 100 }}>TIN TỨC</h1>
        <div className="divider text-center">
            <span className="leaf-icon">&#127806;</span>
        </div>
        <div className="news">
            {news.map((value) => {
                return <div key={value.id} className="news-item">
                    <img src={require(`../../assets/imgs/${value.image}`)} alt="" className="news-image" />
                    <span className="news-title">{value.content}</span>
                </div>
            })}
        </div>
    </div>
}