import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

const TeacherItem: React.FC = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/37818528?s=460&u=01920f117e51ca48229cc17d341a7ad5438b6e2f&v=4" alt="João Henrique" />
                <div>
                    <strong>João Henrique</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnlogias de química avançada.
                <br /><br />
                Apaixonado por explodir coisas em laboratório e por mudar vidas de pessoas através de experiências. Mais de 200.000 já passaram por uma das minhas explosões.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;