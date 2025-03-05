import { useForm } from "react-hook-form";
import axios from "axios";
import '../css/Login.css'

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        mode: "onChange"
    });

    const loginUser = async (data) => {
        try {
            const response = await axios.post('https://localhost:7012/Login/LoginEkrani', data);
            if (response.data.jwtToken != null) {
                localStorage.setItem("webappjwttoken", response.data.jwtToken);
                window.location.href = 'https://localhost:7012/Home/Index'
            }
           
        } catch (error) {
            console.error("Giriş başarısız", error);
        }
    };

    return (
        <div>
            <div className="signup">
                <div className="signup-classic">
                    <h2>ABlog</h2>
                    <form onSubmit={handleSubmit(loginUser)} className="form">
                        <fieldset className="username">
                            <input type="text" placeholder="Kullanıcı Adı" {...register("KullaniciAdi", {
                            required: "Kullanıcı Adı zorunludur."
                        })} />
                         {errors.KullaniciAdi && <span>{errors.KullaniciAdi.message}</span>}
                        </fieldset>
                        <fieldset className="password">
                            <input type="password" placeholder="Şifre"  {...register("Sifre", {
                            required: "Şifre zorunludur.",
                            minLength: { value: 5, message: "Minimum 5 karakter giriniz." }
                            })} />
                        {errors.Sifre && <span>{errors.Sifre.message}</span>}
                        </fieldset>
                        <button type="submit" className="btn">GİRİŞ</button>
                    </form>
                </div>
            </div>
        </div>
       
    );
}

export default Login;