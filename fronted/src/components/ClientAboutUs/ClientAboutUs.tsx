export default function ClientAboutUs() {
    return <div style={{ marginTop: 150, textAlign: 'center', color: '#224D31' }}>
        <h1>VỀ CHÚNG TÔI</h1>
        <div className="divider text-center">
            <span className="leaf-icon">&#127806;</span>
        </div>
        <img style={{ width: '100vw', marginLeft: 'calc((100vw - 1320px + 24px) / 2 * -1)' }} src={require('../../assets/imgs/banner1.png')} alt="" className="about-us-image" />
    </div>
}