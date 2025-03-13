import Typed from "typed.js"; // Typed.js'i import et
import $ from "jquery";

export const initializeScrollSpy = () => {
    // Navbar'daki linklere tıklanınca kaydırma efekti
    $(".js-scroll").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;

            // Kaydırma işlemi ile birlikte offset ekleme
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top - 75, // Offset'i burada ayarlayabilirsin (örneğin, navbar yüksekliği)
                },
                800 // 800 milisaniyede kaydırma
            );
        }
    });
};

export const initializeTyped = () => {
    const options = {
        strings: ["CEO DevFolio", "Web Developer", "Web Designer", "Frontend Developer", "Graphic Designer"],
        typeSpeed: 100, // Yazma hızı
        backSpeed: 50,  // Silme hızı
        backDelay: 2000, // Silme gecikmesi
        loop: true, // Sonsuz döngü
    };

    const typed = new Typed(".text-slider", options); // Typed.js'i başlat
};

export const checkUserData = (navigate) => {
    const data = JSON.parse(localStorage.getItem("user_data"));
    if (!data) {
        navigate("/login");
    }
};