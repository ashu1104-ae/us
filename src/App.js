import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import PuzzleGame from "./PuzzleGame";
import ReactPlayer from 'react-player';
import { Analytics } from "@vercel/analytics/react"


const photos = [
  { src: "/images/28.jpg" },
  { src: "/images/7.jpg" },
  { src: "/images/33.jpg" },
  { src: "/images/17.jpg" },
  { src: "/images/56.jpg" },
  { src: "/images/24.jpg" },
  { src: "/images/3.jpg" },
  { src: "/images/20.jpg" },
  { src: "/images/45.jpg" },
  { src: "/images/13.jpg" },
  { src: "/images/54.jpg" },
  { src: "/images/15.jpg" },
  { src: "/images/50.jpg" },
  { src: "/images/27.jpg" },
  { src: "/images/59.jpg" },
  { src: "/images/8.jpg" },
  { src: "/images/41.jpg" },
  { src: "/images/31.jpg" },
  { src: "/images/43.jpg" },
  { src: "/images/30.jpg" },
  { src: "/images/39.jpg" },
  { src: "/images/2.jpg" },
  { src: "/images/40.jpg" },
  { src: "/images/23.jpg" },
  { src: "/images/4.jpg" },
  { src: "/images/12.jpg" },
  { src: "/images/38.jpg" },
  { src: "/images/26.jpg" },
  { src: "/images/49.jpg" },
  { src: "/images/16.jpg" },
  { src: "/images/37.jpg" },
  { src: "/images/36.jpg" },
  { src: "/images/14.jpg" },
  { src: "/images/25.jpg" },
  { src: "/images/21.jpg" },
  { src: "/images/53.jpg" },
  { src: "/images/5.jpg" },
  { src: "/images/47.jpg" },
  { src: "/images/6.jpg" },
  { src: "/images/9.jpg" },
  { src: "/images/42.jpg" },
  { src: "/images/11.jpg" },
  { src: "/images/29.jpg" },
  { src: "/images/48.jpg" },
  { src: "/images/10.jpg" },
  { src: "/images/52.jpg" },
  { src: "/images/32.jpg" },
  { src: "/images/60.jpg" },
  { src: "/images/35.jpg" },
  { src: "/images/44.jpg" },
  { src: "/images/55.jpg" },
  { src: "/images/22.jpg" },
  { src: "/images/19.jpg" },
  { src: "/images/46.jpg" },
  { src: "/images/18.jpg" },
  { src: "/images/1.jpg" },
  { src: "/images/34.jpg" },
  { src: "/images/58.jpg" },
  { src: "/images/51.jpg" },
  { src: "/images/57.jpg" },
];


const messages = [
  {
    month: "Month 1",
    myMessage: "Happy One Month Anniversary babe ❤❤",
    herMessage: "HAPPY ONE MONTH ANNIVERSARY JAAN ♥♥",
  },
  {
    month: "Month 2",
    myMessage: `HAPPY TWO MONTHS ANNIVERSARY BABE ❤😘 

yrr bhot acha lg rha h hamare 2 mahine ho gyee dekhte he dekhte
kitna maza aaya tha yeh trip me yrr maine phele baar dekha tujhe mujhe vishwas he nhi ho rha tha mai tujhse mil rha hunn💖 yrr thankyou tune he force Kiya aur itna acha banya plan love uu sooo mucchh yrr 
Ek ek chiz mujhe yaad h joo hamne ki room me kitna jaada wla maza aaya yrr 💖🫠 jab tu mujhe pyaar se khilatii toh itna maza aa jaata yrr 🥹 tu kitna jaada meri care krti h yrr 🥺 🥺 
Mujhe hamesha tu chaiyee yrr ❤❤ plzz hamesha mere passs rehna yrr kabhi mat jaana plzz 🥹🥹
Woo pyaare pyaare moment tune capture kiye kitna jaada acha lgta h ab unn pics ko dekhta hun toh aise lgta h tu mere pass he h 💖💖💖
Hamesha mere sapno me aati h sapno me dekhta rehta hun ki hame itna enjoy kiya doo din bhot maza aaya ❤
Phir tune mujhe woo ring di woo kitni jaada achi lg rhi h mujpe 🥹🥹 usko mai hamesha kiss krta rehta hun jaise he mujhe yaad aati h mai ring pe kiss kr leta hunnn 😘 🥺🥺
Mai tujhe sach me bhott misss krta hun yrr 
Mai chahta hun tu rehe mere pass hameshaaa 
Mujhe teri body se pura chipak k rehna h yrr 🥹🥹
Plzz kbhi mat durrr Krna mujhe chaiye kuch bhi ho jaayee 
Mai kabhi gussa houn toh Mann lena mujhe😭😭🥹

Thank you yrr sab chizz k liye aur woo pyaree se gift k liye bhi. 
Aur jldi se wps ek aur aise trip plan kro mai bhott yaad krta hun aapkoo 🥺 ❤ 
I love uu always ❤ 
And you are my everything 💝`,
herMessage: `HAPPY SECOND MONTH ANNIVERSARY BABE There’s nothing in this world can change my feelings for you
You’re the best part of my life
Ab sb complete h tere bina

Tujheee kyu niiii smjh aata h mera pyaar
Kyuuu doubt aajata h tere andr ki mai chli jaugiii
Mai kha jaugiii, naraaz hoke kuch der m tere paas hi 
wapas aaugi 
Haii kaun mera tere alawa

Maine tujhse pehle kbhi kisi k liye aisa feel nii kra
Tu itna jada pyaara h ki mai roz rozz tere pyaar m girti hu jaise ki 1st day h

Jbse tu meri life m aaya h tbse maine sbko side krdiya, tujhe hi apna dost apna bnda hr chiz tujhe hi smjhne lgi, kyuki tu hai itna acha aur tu deserve krta h
Jb tu hurt hojata h mai bohot jada pareshan hojati hu kuch smjh ni aata kya kru kaise kruuu puri blank hojati hu

Aaj se pehle kbhi maine kri hi ni itni care kisi ki, kbhi socha v niii ki ek bnda itna imp bnjayega mere liyee ki mai uski wajah se hsugi aur rougii sb uspr depend hojayega

Ashishh I love u the most and I will keep loving you forever 
Mera pyaar kbhi khatam ni hoga aapke liye I promise 
Tu best h yrrr itni fikr krta h meri
Mujhe solutions deta h
Meri baate sunta h smjhta h
Trust v itna krta h tu mujhse
To mai kaise kbhi kuch galat kr skti hu

Mujhe sirf tu chahiyeee vo v hmesaaa hmesaaa k liyeeeeeeeeeee 💞
Mujhe nii pta tera mn kya rhega life m aage jake at some point but mera to fix hota h ek baar kisi chiz p dil aagya to ♾

Khaiiirrr aap maaf krdo mujheee agr meri taraf se hurt hogye to❤‍🩹
Bs ab gussa side kroo and aake mujhe khub saraa pyaaar doo🥺🥺
Once again Happy 2 month mera bchaaaaaaaaaaaaaaa
Love you lots♥♥`,
  },
  {
    month: "Month 3",
    myMessage: 'Happy Third Month Anniversary my doll❤❤❤ Yayaya hamare 3 month ho gyee 🥰🥰 kitna maza aata h aapke sath meri pyaari doll Aise he ham aage badhte jaaye toh aur maza aayegaa Yrr mai gussa ho jaata hun prr hamesha tuhi tuhi mind me aati rehti h yrr plzz kabhi aise mat samjhna ki ho gya mera aise kr k 🥺🥺 Doll I love you ❤ Jaldi jaldi Milo abhi bhot jaada excited hun mai aapse milne k liyee Aapko bahoott bahhoottt bahoott saari kissi aur hugg krne hhh 🥰🥰 Yaya ham milenge kitna maza aayega aur jaada memories banegii yayaa😘😘 Yrr ek aur main baat yrr plzz itna gussa mat kiya kr yrr pta nhi gusse me kya kya bol jaati h tuuuu prr koi naa dhyaan rakhoo plzz meri pyaari si dolll ❤ Jaldi jaldi miloo 26 ka wait nhi ho rha h ❤😘😘 I Love you so much Eram ❤ Once again Happy Third Month Anniversary Eram❤',
    herMessage: 'HAPPY THIRD MONTH ANNIVERSARY mera pyara sa bchaa♥♥ Kitna jldi jldi time ja rha Aur hm utne hi close hote ja rhe🥺🥺 I love u lotss Aapko andaza v nii kitna jada miss krti hu aapko mai kitna jada💗💗💗 M soo sorry mera behavior shi nii rehta gusse k waqt Mai sb change krlugi aapke liye Mai nii kr skti aapko hurt Chote se bche ho aap mere Mujhe kbhi nii lgta tha itna pyaara bnda milega mujhe💓 Tu jbse aaya h meri life bohot peaceful aur beautiful bngyi h Tu hai hi gift mera💘💘💘 Plzz hmesa hmesa mere sath rehna aise hii plzz ashishh Mai nii reh skti tere bina kbhi vvv Love u sooo muchh Jldi jldi mile bsss hm ab💖💖💖💖',
  },
  {
    month: "Month 4",
    myMessage: 'HAPPY FOURTH MONTH ANNIVERSARY Dollu🎉💕 Itni pyaari si h tuu cuttiee I love you soo muchh dollu meri erammm❤ Tu rehti h na toh maza aata h yrrr kitna jaada fun krte h ham log sath me bhot bhot maza aata h tere sath💕 Mujhe toh ab sab fun tere sath he Krna h yeh woo good fun hoo yeh woo naughty fun ho😛 Meri jaan ho aap cuttiee❤ Kitna sahi hooga ham iss baar bhi wps mile ek proper hug zarur krenge smhi❤ Aur bhot saari memories banyenge bhot jaaaa bhott jaada💕💕 Aur dekho yeh kabhi mat bhulna mai tere sath me hamesha chaiyee kuch bhi hoo meri pyaari si jaan hoo aap❤❤ Aur jaan sorry meri galtiyo k liye mai usko aage repeat nhi hone dunga Aur better banunga aapke liye Kyuki aap khush toh mai khush 💕 Jb jb tujhe tension hoti h toh mujhe bhi tension hone lgti h ki tu akele tension nhi utha paayega 😭😭 Aur han jaan tension mat liya kro jaada mai smjhta hun whn woo log krte h waise pr yrr woo log iske worth it bhi nhi h aap unke liye tension lo thodi bhii meri jaan💕💕 I Love you so much ❤ Aur ham jaldi mil rhe h ready rehna apne hero se milne k liye💕💕 Luv u ❤ Once again Happy Fourth Month Anniversary 💕💕',
    herMessage: 'AGAIN HAPPY 4 MONTH ANNIVERSARY JAAN I love u soooo muchh I pray ki hmesa aise hi sath rhe hm kitni v prlm aaye sb sath m face kre Tu duniya ka sbse best bnda h sbseeeeee bestttt meri choti si pyari si jaan h tuuu ashish Itna jada pyar krti hu mai tujhe khud se v nii krti itnaa Kaash jldi mile hm Aap jb paas hote ho to bohot sukooon milta h mujhe Wrna mai bohor pareshan rehti hu andr se hr waqt Jb jb aap mere paas hote ho mai sb bhul jati hui Hr chiz pyari aur achi dikhne lgti h mujhe aapke hone se Aise hi hmesa rehna yr mere paas plzz mai bohot bohot pyaar dugi tujhe I promisee Love u so much golu molu Aur bura feel nii krna uth k ki sogya tu its ok love hota h jaan ho aap meri mujhe ni bura lga Aap mere sath ho mere liye yhi kaafi h ❤❤❤❤',
  },
];

function OurMessages() {
  const [activeMonth, setActiveMonth] = useState(null); // Track which month's messages are open

  const toggleMonth = (month) => {
    setActiveMonth(activeMonth === month ? null : month); // Toggle the active month
  };

  return (
    <div className="our-messages">
      <h2 className="section-title">Our Anniversary Messages</h2>
      <div className="messages-container">
        {/* Month Buttons */}
        {messages.map((message, index) => (
          <div key={index} className={`message-button message-month${index + 1}`}>
            <button onClick={() => toggleMonth(index + 1)}>{message.month}</button>
          </div>
        ))}
        {/* Happy Anniversary Image */}
        <div className="happy-anniversary">
          <img
            src="/images/ha.jpg" // Replace with the correct path to your image
            alt="Happy Anniversary"
          />
        </div>

        {/* Pop-up Messages */}
        {activeMonth && (
          <div className="popup">
            <div className="popup-content">
              <button className="close-button" onClick={() => setActiveMonth(null)}>
                ✖
              </button>
              <h3>{messages[activeMonth - 1].month}</h3>
              <div className="popup-messages">
                <div className="my-message">
                  <h4>Golu</h4>
                  <p>{messages[activeMonth - 1].myMessage}</p>
                </div>
                <div className="her-message">
                  <h4>Dollu</h4>
                  <p>{messages[activeMonth - 1].herMessage}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [nickname, setNickname] = useState("");
  const [partnerNickname, setPartnerNickname] = useState("");
  const [error, setError] = useState("");
  const [current, setCurrent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPuzzle, setShowPuzzle] = useState(false); // State for PuzzleGame visibility
  const messagesRef = useRef(null); // Ref for OurMessages section

  const handleLogin = () => {
    const name1 = nickname.trim().toLowerCase();
    const name2 = partnerNickname.trim().toLowerCase();

    if (
      (name1 === "dollu" && name2 === "golu") ||
      (name1 === "golu" && name2 === "dollu")
    ) {
      setLoggedIn(true);
      setError("");
    } else {
      setError(
        "Oops! Nicknames don't match. 😢😢😢 Awww, tujhe ab mera nickname yaad nahi hai kya? Katti katti 😢"
      );
    }
  };

  const [showVideo, setShowVideo] = useState(false);


  const swipeLeft = () => {
    setCurrent((prev) => (prev + 1) % photos.length);
  };

  const swipeRight = () => {
    setCurrent((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const togglePuzzle = () => {
    setShowPuzzle((prev) => !prev);
  };

  const scrollToMessages = () => {
    messagesRef.current.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); // Close the menu after clicking
  };

  const [showAudio, setShowAudio] = useState(false); // State for audio player visibility

  const toggleAudio = () => {
    setShowAudio((prev) => !prev);
    setMenuOpen(false); // Close the menu after clicking
  };

  if (!loggedIn) {
    return (
      <div className="login-page">
        <h1>Enter Our Nicknames Cutuu 💞</h1>
        <input
          type="text"
          placeholder="Your nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Partner's nickname"
          value={partnerNickname}
          onChange={(e) => setPartnerNickname(e.target.value)}
        />
        {error && <p className="error-message">{error}</p>}
        <button onClick={handleLogin}>Let's Go 💖</button>
      </div>
    );
  }

  return (
    <div className="polaroid-page">
      <Analytics />
      {/* Top strip */}
      <div className="top-strip">
        <h2 className="text-3xl font-bold text-rose-600">
          {nickname} & {partnerNickname} ♾️ 👩‍❤️‍👨
        </h2>
        {/* Menu */}
        <div className="menu-container">
          <button className="menu-button" onClick={toggleMenu}>
            ☰
          </button>
          {menuOpen && (
            <div className="menu-dropdown">
              <button onClick={togglePuzzle} style={{ cursor: "pointer", backgroundColor: "transparent", border: "none", color: "#e91e63", fontSize: "1rem", fontWeight: "bold", padding: "0.5rem 1rem", textAlign: "center", transition: "background-color 0.3s ease, color 0.3s ease, transform 0.2s ease" }}>
                Puzzle Game
              </button>
              <button onClick={scrollToMessages} style={{ backgroundColor: "transparent", border: "none", color: "#e91e63", fontSize: "1rem", fontWeight: "bold", padding: "0.5rem 1rem", textAlign: "center", transition: "background-color 0.3s ease, color 0.3s ease, transform 0.2s ease" }}>
                Our Messages
              </button>
              <button
                onClick={() => {
                  setShowVideo((prev) => !prev);
                  setMenuOpen(false); // Close the menu after clicking
                }}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#e91e63",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  padding: "0.5rem 1rem",
                  textAlign: "center",
                  transition: "background-color 0.3s ease, color 0.3s ease, transform 0.2s ease",
                }}
              >
                Our Video
              </button>

              <button
                onClick={toggleAudio}
                style={{ backgroundColor: "transparent", border: "none", color: "#e91e63", fontSize: "1rem", fontWeight: "bold", padding: "0.5rem 1rem", textAlign: "center", transition: "background-color 0.3s ease, color 0.3s ease, transform 0.2s ease" }}
              >
                Voice Messages
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main content with side images and carousel */}
      <div className="main-content">
        {/* Left side images */}
        <div className="side-images left-side">
          <img src="/images/1a.jpg" alt="Left 1" className="side-image" />
          <img src="/images/3a.jpg" alt="Left 2" className="side-image" />
        </div>

        {/* Carousel in the center */}
        <div className="carousel-container">
          <AnimatePresence>
            {photos.map((photo, index) => {
              const rotation = (index - current) * 60;
              const zIndex = photos.length - Math.abs(index - current);
              return (
                <motion.div
                  key={index}
                  className="carousel-card"
                  style={{
                    transform: `rotateY(${rotation}deg) translateZ(300px)`,
                    zIndex,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="polaroid-frame">
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      className="gallery-image"
                    />
                    <p className="caption-text">{photo.caption}</p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Right side images */}
        <div className="side-images right-side">
          <img src="/images/2a.jpg" alt="Right 1" className="side-image" />
          <img src="/images/4a.jpg" alt="Right 2" className="side-image" />
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="polaroid-buttons">
        <button onClick={swipeRight}>⬅️</button>
        <button onClick={swipeLeft}>➡️</button>
      </div>

      {showVideo && (
        <div className="video-section">
          <h2>Our Special Videos</h2>
          <div className="video-player">
          <ReactPlayer url="/videos/15.mp4" controls width="100%" />
            <ReactPlayer url="/videos/1.mp4" controls width="100%" />
            <ReactPlayer url="/videos/12.mp4" controls width="100%" />
            <ReactPlayer url="/videos/13.mp4" controls width="100%" />
            <ReactPlayer url="/videos/2.mp4" controls width="100%" />
            <ReactPlayer url="/videos/3.mp4" controls width="100%" />
            <ReactPlayer url="/videos/4.mp4" controls width="100%" />
            <ReactPlayer url="/videos/5.mp4" controls width="100%" />
            <ReactPlayer url="/videos/6.mp4" controls width="100%" />
            <ReactPlayer url="/videos/7.mp4" controls width="100%" />
            <ReactPlayer url="/videos/11.mp4" controls width="100%" />
            <ReactPlayer url="/videos/14.mp4" controls width="100%" />
            <ReactPlayer url="/videos/8.mp4" controls width="100%" />
            <ReactPlayer url="/videos/9.mp4" controls width="100%" />
            <ReactPlayer url="/videos/10.mp4" controls width="100%" />
            {/* Add more videos as needed */}
          </div>
        </div>
      )}




      {showAudio && (
        <div className="audio-section">
          <h2>Voice Messages</h2>
          <div className="audio-player">
            <div className="audio-card">
              <h3>Listen to Our Special Message</h3>
              <audio controls>
                <source src="/audio/1.opus" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <audio controls>
                <source src="/audio/2.opus" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <audio controls>
                <source src="/audio/3.opus" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <audio controls>
                <source src="/audio/4.opus" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <audio controls>
                <source src="/audio/5.opus" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <audio controls>
                <source src="/audio/6.opus" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <audio controls>
                <source src="/audio/7.opus" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <audio controls>
                <source src="/audio/8.opus" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>
      )}


      {/* Our Messages */}
      <div id="our-messages" ref={messagesRef}>
        <OurMessages />
      </div>
      {/* Conditionally render PuzzleGame */}
      {showPuzzle && (
        <div className="puzzle-section">
          <h2>Puzzle Game</h2> {/* Add the heading */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/images/8.jpg" alt="Side Left" style={{ width: '250px', height: '250px', marginRight: '20px' }} />
            <PuzzleGame imageSrc="/images/8.jpg" gridSize={3} />

          </div>
        </div>

      )}
    </div>
  )
}