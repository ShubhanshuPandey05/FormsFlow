import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../context/authContext";
import toast from "react-hot-toast";
import { useLoading } from "../context/LoadingContext";

const useLogin = () => {
    const navigator = useNavigate()
    const {setIsAuth} =useAuthContext();
    const { showLoading, hideLoading } = useLoading();

    const login = async (data) => {

        const success = handleErrorInputs(data.Email, data.Password);

        if (!success) return; 
        showLoading();

        // let response = await fetch(`https://forms-flow-api.vercel.app/api/auth/login/`,{
        let response = await fetch(`http://localhost:3000/api/auth/login/`,{
        // let response = await fetch(`${process.env.BASE_LINK}/auth/login/`,{
            method: "post",
            headers: {
                "Content-Type": "application/json",
              },
            credentials: 'include',
            body: JSON.stringify(data),
        })
        const result = await response.json()
        if(response.ok){
            localStorage.setItem('authUser', JSON.stringify(result))
            setIsAuth(true)
            navigator("/")
            toast.success("Login Success");
            hideLoading()
        }else{
            toast.error(JSON.stringify(result));
            hideLoading()
        }
        hideLoading();

    }

    return {login};
}
function handleErrorInputs(Email, password) {
    if (!Email || !password) {
        toast.error('Please fill all fields');
        return false;
    }
    return true;
}

export default useLogin;