import { useForm } from "react-hook-form";
import '../css/Login.css'
import { useDispatch } from 'react-redux'
import { useEffect } from "react";
import { getUser } from "../redux/slices/loginSlice";
import { useNavigate } from "react-router-dom"

function Login() {

    useEffect(() => {
        document.body.className = "login-page";
        return () => { document.body.className = ""; }
    }, []);

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors }
    } = useForm({
        mode: "onChange"
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userLogin = async (data) => {
        try {
            const response = await dispatch(getUser(data)).unwrap();
            if (response && response.id > 0) {
                localStorage.setItem("webappjwttoken", response.jwtToken);
                navigate("/")
            }
            else {
                setError("Sifre", {
                    type: "manual",
                    message: "Kullanıcı Adı veya Şifre yanlış!! Lütfen tekrar deneyiniz."
                });
            }
        } catch (error) {
            setError("Sifre", {
                type: "manual",
                message: "Giriş sırasında bir hata oluştu!"
            });
            console.error("Giriş hatası:", error);
        }
    };

    return (
        <div className="signup">
            <div className="signup-classic">
                <h2>ABlog</h2>
                <form onSubmit={handleSubmit(userLogin)} className="form">
                    <fieldset className="username">
                        <input type="text" placeholder="Kullanıcı Adı" {...register("KullaniciAdi", {
                            required: "Kullanıcı Adı zorunludur."
                        })} />
                        {errors.KullaniciAdi && <span className="errorMessage">{errors.KullaniciAdi.message}</span>}
                    </fieldset>
                    <fieldset className="password">
                        <input type="password" placeholder="Şifre"  {...register("Sifre", {
                            required: "Şifre zorunludur.",
                            minLength: { value: 5, message: "Minimum 5 karakter giriniz." }
                        })} />
                        {errors.Sifre && <span className="errorMessage">{errors.Sifre.message}</span>}
                    </fieldset>
                    <button type="submit" className="btn">GİRİŞ</button>
                </form>
            </div>
        </div>
    );
}

export default Login;