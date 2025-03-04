import { useForm } from "react-hook-form";
import axios from "axios";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

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
        <div className="frm">
            <form onSubmit={handleSubmit(loginUser)}>
                <div className="frmKullaniciAdi">
                    <label className="frmLabel">KULLANICI ADI</label>
                    <input className="frm-input"
                        {...register("KullaniciAdi", {
                            required: "Kullanıcı Adı zorunludur.",
                            minLength: { value: 2, message: "Minimum 2 karakter giriniz." }
                        })}
                        type="text"
                    />
                    {errors.KullaniciAdi && <span>{errors.KullaniciAdi.message}</span>}
                </div>

                <div className="frmSifre">
                    <label className="frmLabel">ŞİFRE</label>
                    <input className="frm-input"
                        {...register("Sifre", {
                            required: "Şifre zorunludur.",
                            minLength: { value: 2, message: "Minimum 2 karakter giriniz." }
                        })}
                        type="password"
                    />
                    {errors.Sifre && <span>{errors.Sifre.message}</span>}
                </div>

                <div>
                    <button type="submit" className="frmButton">Giriş</button>
                </div>

            </form>
        </div>
    );
}

export default Login;