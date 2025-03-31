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

function App() {

    const [formData, setFormData] = useState<{ userFio: string, userNumber: string, userStatus: null | boolean }>({
        userFio: "",
        userNumber: "",
        userStatus: null
    });
    const [isMobile, setIsMobile] = useState(true);
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

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1100) {
                setIsMobile(false);
            } else {
                setIsMobile(true);
            }
        })
    }, []);

    if (isMobile) {
        return (
            <div className="wrapper">
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
                            <h2>16.05</h2>
                            <div className="timings">
                                <div>
                                    15:00 Размещение в отеле PineRiver (городской округ Сочи, посёлок городского типа 
                                    Красная Поляна, улица Пчеловодов, 59)
                                </div>
                                <div>19:00 Ужин в ресторане отеля</div> 
                            </div>
                        </div>
                        <div className="item-test">
                            <h2>17.05</h2>
                            <div className="timings">
                                <div>08:00 - 09:00 Завтрак в отеле PineRiver</div>
                                <div>09:30 - 12:00 Конференция 7RL/OKX</div> 
                                <div>13:00 - 15:00 Обед в ресторане Old Boys</div>
                                <div>16:00 - 19:00 Банный комплекс 4 стихии</div> 
                                <div>21:00 - 22:00 Ужин в ресторане Brunello</div>
                                <div>22:00 - 02:00 Игра в казино</div> 
                            </div>
                        </div>
                        <div className="item-test">
                            <h2>18.05</h2>
                            <div className="timings">
                                <div>09:00 Завтрак </div>
                                <div>11:00 - 12:30 Купель</div> 
                                <div>13:00 - 15:00 Обед в ресторане «Яблоки печем»</div>
                                <div>после 15:30 свободное время</div>
                            </div>
                        </div>
                        <div className="content-timings-footer">Выселение доступно до 19.05 12:00</div>
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
                                    "https://optim.tildacdn.com/tild6266-6166-4765-a661-396135323037/-/format/webp/0001-7-2.jpg",
                                    "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_652e2c78ba9cbf61341dcf55_652e2ded7e9d3d6391cc2219/scale_1200",
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
                                    "https://yabloki-pechem.com/wp-content/themes/yablokipechem-new/images/665ee13b840ea294cd7a8694_new_02.webp",
                                    "https://static.tildacdn.com/tild3034-6431-4838-a633-353161386663/1W9A7238.jpg",
                                    "https://static.tildacdn.com/tild6366-3365-4339-a563-653330313665/1W9A7277.jpg"
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
                                "https://avatars.mds.yandex.net/get-altay/9793917/2a0000018b5316c4685a841c38cfbc22910e/XXXL",
                                "https://avatars.mds.yandex.net/get-altay/9686455/2a00000187cdf604f64f43589b5105aa6360/XXXL",
                                "https://avatars.mds.yandex.net/get-altay/235931/2a000001866542d28103e578848667eb74f9/XXXL"
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
                                "https://casinosochi.ru/_next/image?url=https%3A%2F%2Fbackend.krasnayapolyana.game%2Fassets%2Fcbec6963-3dd2-476d-ade1-0bade1c92bf0%3F&w=1080&q=75",
                                "https://casinosochi.ru/_next/image?url=https%3A%2F%2Fbackend.krasnayapolyana.game%2Fassets%2F3843ad8b-fd96-486c-88ff-8d41c0497143%3F&w=1080&q=75",
                                "https://casinosochi.ru/_next/image?url=https%3A%2F%2Fbackend.krasnayapolyana.game%2Fassets%2Fcbec6963-3dd2-476d-ade1-0bade1c92bf0%3F&w=1080&q=75"
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
                                "https://avatars.mds.yandex.net/get-altay/9720767/2a00000189de8bc163b2d8121187058bd871/XXXL",
                                "https://avatars.mds.yandex.net/get-altay/10285614/2a0000018fe7ec315c119ea3e3d4b20f64d2/XXXL",
                                "https://avatars.mds.yandex.net/get-altay/10768168/2a00000190c1fab6f03d637af4c2414f832d/XXXL"
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
                        <div className="date">28.03.2025</div>
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
                                maxLength={11} 
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
                    </div>
                </div>
                <div className="main-footer">
                    <div className="main-footer-content">
                        <h2>ОСТАЛИСЬ ВОПРОСЫ?</h2>
                        <div>Яна Сваровская – помощник руководителя  7 RED LINES</div>
                        <div>+7(966) 171-13-31</div>
                        <div className='main-footer-icons'>
                            <FaTelegram color='#27a7e7' fontSize={"25px"} />
                            <FaWhatsappSquare color='#43d854' fontSize={"25px"} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <h1>Возможен вход только с мобильного устройства!</h1>
        )
    }
    
}

export default App
