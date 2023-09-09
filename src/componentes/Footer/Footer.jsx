import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(./img/footer.png)" }}>
        <div className='redes'>
            <a href='https://leobinarystar.github.io/LeoBinaryStar.github.ioLeonardoMontes_MyWeb/'>
                <img src="./img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://leobinarystar.github.io/LeoBinaryStar.github.ioLeonardoMontes_MyWeb/'>
                <img src="./img/twitter.png" alt='twitter' />
            </a>
            <a href='https://leobinarystar.github.io/LeoBinaryStar.github.ioLeonardoMontes_MyWeb/'>
                <img src="./img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Alura</strong>
    </footer>
}

export default Footer