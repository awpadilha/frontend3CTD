import './styles.css';
import logo from '../../assets/logo.jpg'

export default function Header() {

    return (
        <header className="header_container">
            <img src={logo} alt="Logo" className='logo_header'/>
            <h1 className='texto_header'>Homem muito feliz por estar em um aplicativo limpo</h1>
        </header>
    )
} 