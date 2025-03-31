import { useEffect, useRef, useState } from 'react';
import { FaTelegram } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import Carousel from './components/partials/carousel';
import '@ant-design/v5-patch-for-react-19';
import './stylesheets/themes/dark.scss';
import './stylesheets/themes/white.scss';
import './stylesheets/main/main.scss';
import './stylesheets/antd/main.scss';
import './App.css';
import axios from 'axios';
import { Modal } from 'antd';

function App() {

    const [formData, setFormData] = useState<{ userFio: string, userNumber: string, userStatus: null | boolean }>({
        userFio: "",
        userNumber: "",
        userStatus: null
    });
    const [isMobile, setIsMobile] = useState(true);
    const [modal, contextHolder] = Modal.useModal();
    const fioInput = useRef<HTMLInputElement>(null);
    const numberInput = useRef<HTMLInputElement>(null);
    const statusInputTrue = useRef<HTMLInputElement>(null);
    const statusInputFalse = useRef<HTMLInputElement>(null);
    const [isSubmit, setIsSubmit] = useState(false);

    const submit = (e: any) => {
        e.preventDefault();
        setIsSubmit(true);
        if (fioInput.current && numberInput.current) {
            if (formData.userFio === "") {
                fioInput.current.classList.add("error");
            }
            if (formData.userNumber === "") {
                numberInput.current.classList.add("error");
            }
        }
        if (formData.userFio && formData.userNumber && formData.userStatus) {
            axios.post("http://localhost:5000/auth", { 
                fio: formData.userFio, 
                number: formData.userNumber, 
                status: formData.userStatus 
            })
            .then((res: any) => {
                console.log(res);
                if (fioInput.current && numberInput.current && statusInputTrue.current && statusInputFalse.current) {
                    fioInput.current.value = "";
                    numberInput.current.value = "";
                    statusInputTrue.current.checked = false;
                    statusInputFalse.current.checked = false;
                    modal.info({ title: "Статус ответа", content: (
                        <>
                            <div>Ваш ответ сохранён</div>
                        </>
                    ) })
                }
            })
            .catch((error) => {
                console.error(error);
                modal.error({ title: "Статус ответа", content: (
                    <>
                        <div>Произошла ошибка при сохранении ответа</div>
                    </>
                ) })
            })
        }
    }

    useEffect(() => {
        if (fioInput.current && numberInput.current && isSubmit !== false) {
            if (formData.userFio !== "") {
                fioInput.current.classList.remove("error");
            }
            else {
                fioInput.current.classList.add("error");
            }
            if (formData.userNumber !== "") {
                numberInput.current.classList.remove("error");
            }
            else {
                numberInput.current.classList.add("error");
            }
        }
    }, [formData]);

    const displayContent = () => {
        if (window.innerWidth >= 1100) {
            setIsMobile(false);
        } else {
            setIsMobile(true);
        }
    }

    useEffect(() => {
        displayContent();
        window.addEventListener('resize', () => {
            displayContent();
        })
    }, []);

    if (isMobile) {
        return (
            <div className="wrapper">
                {contextHolder}
                <div className="header">
                    <div className='background-img' />
                </div>
                <div className="content">
                    <div className="content-title">
                        <h1>Дорогие партнеры!</h1>
                        <div className="content-title-main">
                            Мы рады представить Вам эксклюзивную возможность стать частью закрытого инвестиционного клуба, 
                            ориентированного на перспективные цифровые активы и инновационные торговые алгоритмы.
                        </div>
                    </div>
                    <div className="content-timings">
                        <h2>Программа</h2>
                        <div className="item-test">
                            <h2 className='numbers'>16.05</h2>
                            <div className="timings">
                                <div>
                                    <span className = "numbers small">15:00</span> Размещение в отеле PineRiver (городской округ Сочи, посёлок городского типа 
                                    Красная Поляна, улица Пчеловодов, 59)
                                </div>
                                <div><span className = "numbers small">19:00</span> Ужин в ресторане отеля</div> 
                            </div>
                        </div>
                        <div className="item-test">
                            <h2 className='numbers'>17.05</h2>
                            <div className="timings">
                                <div><span className = "numbers small">08:00 - 09:00</span> Завтрак в отеле PineRiver</div>
                                <div><span className = "numbers small">09:30 - 12:00</span> Конференция 7RL/OKX</div> 
                                <div><span className = "numbers small">13:00 - 15:00</span> Обед в ресторане Old Boys</div>
                                <div><span className = "numbers small">16:00 - 19:00</span> Банный комплекс 4 стихии</div> 
                                <div><span className = "numbers small">21:00 - 22:00</span> Ужин в ресторане Brunello</div>
                                <div><span className = "numbers small">22:00 - 02:00</span> Игра в казино</div> 
                            </div>
                        </div>
                        <div className="item-test">
                            <h2 className='numbers'>18.05</h2>
                            <div className="timings">
                                <div><span className = "numbers small">09:00</span> Завтрак </div>
                                <div><span className = "numbers small">11:00 - 12:30</span> Купель</div> 
                                <div><span className = "numbers small">13:00 - 15:00</span> Обед в ресторане «Яблоки печем»</div>
                                <div><span className = "numbers small">после 15:30</span> Свободное время</div>
                            </div>
                        </div>
                        <div className="content-timings-footer">Выселение доступно до <span className = "numbers small">19.05 12:00</span></div>
                    </div>
                    <div className="content-locations">
                        <div className="content-locations-title">
                            <h2>ЛОКАЦИИ</h2>
                            <div className="title-content">
                                <h3>ПРОЖИВАНИЕ В ОТЕЛЕ PineRiver</h3>
                                <div style={{ marginBottom: "20px" }}>
                                    Отель расположен в самом сердце гор, среди живописных пейзажей, от которых 
                                    буквально захватывает дух. Это место про единение с природой, красоту, гармонию 
                                    и уединение. Место, которое позволит вам расслабиться, восстановить внутренние 
                                    ресурсы, насладиться пляжным отдыхом и авторской кухней в любое время года.
                                </div>
                                <Carousel images={[
                                    "/hotel/first.png",
                                    "/hotel/second.png",
                                    "/hotel/third.png",
                                    "/hotel/fourth.png",
                                    "/hotel/test1.webp",
                                    "/hotel/test2.webp",
                                    "/hotel/test3.webp",
                                    "/hotel/test4.webp",
                                    ]}
                                />
                            </div>
                            <h3>ПОСЕЩЕНИЕ ЛУЧШИХ РЕСТОРАНОВ С ИЗЫСКАННОЙ КУХНЕЙ</h3>
                            <div style={{ marginBottom: "20px" }}>
                                Это возможность насладиться гастрономическими шедеврами от ведущих шеф-поваров 
                                в изысканной атмосфере. Проведем неформальное общение, обсудив перспективные 
                                идеи и инвестиционные возможности в непринужденной обстановке
                            </div>
                            <div className="carousel">
                                <Carousel images={[
                                    "/restaurants/test1.jpeg",
                                    "/restaurants/test2.webp",
                                    "/restaurants/test3.webp",
                                    "/restaurants/test4.webp",
                                    "/restaurants/test5.jpg",
                                    "/restaurants/test6.webp",
                                    "/restaurants/test7.webp",
                                    ]}
                                />
                            </div>
                            <h3>БАННЫЙ КОМПЛЕКС «4 СТИХИИ»</h3>
                            <div style={{ marginBottom: "20px" }}>
                                Это место, где каждый найдет что-то для себя. Здесь есть несколько парных, 
                                включая общественную парную, парную для индивидуального парения и хаммам, 
                                а также бассейн под открытым небом и джакузи. Мастера парения проведут 
                                специальную программу, которая поможет расслабиться и отвлечься от рабочих будней
                            </div>
                            <Carousel images={[
                                    "/four-elements/test1.webp",
                                    "/four-elements/test2.webp",
                                    "/four-elements/test3.webp",
                                    "/four-elements/test4.webp",
                                    "/four-elements/test5.webp",
                                    "/four-elements/test6.webp",
                                    "/four-elements/test7.webp",
                                    "/four-elements/test8.webp",
                                ]}
                            />
                            <h3>КАЗИНО СОЧИ</h3>
                            <div style={{ marginBottom: "20px" }}>
                                это эксклюзивная возможность окунуться в атмосферу азарта и элегантности в 
                                одном из лучших игорных заведений России. Сможем испытать удачу в престижных 
                                игровых залах, насладиться премиальным сервисом, а также провести время в 
                                приватной и роскошной обстановке
                            </div>
                            <Carousel images={[
                                "/casino/main1.jpg",
                                "/casino/main2.webp",
                                "/casino/main3.jpg",
                                "/casino/main4.webp",
                                "/casino/main5.webp",
                                "/casino/main6.webp",
                                "/casino/main7.webp",
                                ]}
                            />
                            <h3>ПРОГУЛКА В ГОРАХ И КУПАНИЕ В КУПЕЛИ</h3>
                            <div style={{ marginBottom: "20px" }}>
                                Вдохновляющие виды горных вершин, свежий воздух и неспешная прогулка создадут 
                                идеальные условия переключения после активного дня. Завершающим акцентом станет 
                                купание в купели с чистейшей родниковой водой, что позволит восстановить силы и 
                                зарядиться энергией.
                            </div>
                            <Carousel images={[
                                    "/font/test1.webp",
                                    "/font/test2.webp",
                                    "/font/test3.webp",
                                    "/font/test4.webp",
                                ]}
                            />
                            <div style={{ marginTop: "20px" }}>
                                * при желании искупаться в купели, просьба предусмотреть наличие сменной одежды, 
                                а также иметь удобную обувь, так как местность гористая
                            </div>
                        </div>
                    </div>
                    <div className="RSVP">
                        <div className="title">ПРОСЬБА ПОДТВЕРДИТЬ СВОЕ ПРИСУТСТВИЕ ДО</div>
                        <div className="date numbers small">28.03.2025</div>
                        <form onSubmit={(e) => submit(e)}>
                            <input 
                                ref={ fioInput }
                                onChange={(e) => setFormData({...formData, userFio: e.target.value})} 
                                className='form-input' 
                                placeholder='Ваше имя и фамилия' 
                            />
                            <input 
                                ref={ numberInput }
                                onChange={(e) => setFormData({...formData, userNumber: e.target.value})} 
                                maxLength={15} 
                                className='form-input' 
                                placeholder='Ваш номер телефона' 
                            />
                            <div className='radio-wrapper'>
                                <input 
                                    ref={statusInputTrue}
                                    onChange={() => setFormData({...formData, userStatus: true})} 
                                    type="radio" 
                                    id="first" 
                                    name="drone"
                                    value="first"
                                />
                                <label 
                                    style={{ 
                                        color: !isSubmit 
                                            ? "white" 
                                            : formData.userStatus !== null ? "white" : "red"
                                    }} 
                                    htmlFor="first"
                                    >
                                    Я смогу прийти
                                </label>
                            </div>
                            <div className='radio-wrapper'>
                                <input 
                                    ref={statusInputFalse}
                                    onChange={() => setFormData({...formData, userStatus: false})} 
                                    type="radio" 
                                    id="second" 
                                    name="drone" 
                                    value="second" 
                                    className='error'
                                />
                                <label 
                                    style={{ 
                                        color: !isSubmit 
                                            ? "white" 
                                            : formData.userStatus !== null ? "white" : "red"
                                    }} 
                                    htmlFor="second">
                                        Я не смогу прийти
                                </label>
                            </div>
                            <button 
                                disabled={ 
                                    !isSubmit 
                                        ? false
                                        : formData.userFio !== "" && formData.userNumber !== "" && formData.userStatus !== null ? false : true
                                }
                                className='submit-button'>
                                    Отправить
                            </button>
                        </form>
                        <div className="background-lines"></div>
                        <div className="main-footer">
                            <div className="main-footer-content">
                                <h2>ОСТАЛИСЬ ВОПРОСЫ?</h2>
                                <div>Яна Сваровская – помощник руководителя  7 RED LINES</div>
                                <div>+7(966) 171-13-31</div>
                                <div className='main-footer-icons'>
                                    <FaTelegram 
                                        onClick={() => window.location.href="http://t.me/79661711331"} 
                                        color='#27a7e7' 
                                        fontSize={"25px"} 
                                    />
                                    <FaWhatsappSquare 
                                        onClick={() => window.location.href="http://wa.me/79661711331"}
                                        color='#43d854' 
                                        fontSize={"25px"} 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="wrapper">
                <h1>Возможен вход только с мобильного устройства!</h1>
            </div>
        )
    }
    
}

export default App
