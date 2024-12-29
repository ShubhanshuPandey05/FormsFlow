import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";
import toast from "react-hot-toast";
import { useLoading } from "../context/LoadingContext";

const useSignUp = () => {
    const navigator = useNavigate();
    const { setIsAuth } = useAuthContext();
    const { showLoading, hideLoading } = useLoading();


    const signUp = async (data) => {

        const success = handleErrorInputs(data.Email, data.Password, data.Name, data.ConfirmPassword);

        if (!success) return;

        showLoading();
        // let response = await fetch(`https://forms-flow-api.vercel.app/api/auth/signUp/`, {
        // let response = await fetch(`http://localhost:3000/api/auth/signUp/`, {
        let response = await fetch(`/api/auth/signUp/`, {
            // let response = await fetch(`${process.env.BASE_LINK}/auth/signUp/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
            body: JSON.stringify(data),
        })
        const result = await response.json()
        if (response.ok) {
            toast.success("Otp send Successfully");
            data.setIsVisible(true);
            hideLoading();
        } else {
            navigator("/signUp");
            toast.error(result.message);
            toast.error("Something went wrong");
            hideLoading();
        }

        hideLoading();


    }
    return { signUp };
}
const useSignUpValidation = () => {
    const navigator = useNavigate();
    const { setIsAuth } = useAuthContext();

    const signUpValidation = async (data) => {

        const success = handleErrorInput(data.Email, data.Otp);


        if (!success) return;


        let response = await fetch(`http://localhost:3000/api/auth/signUp/otp`, {
            // let response = await fetch(`${process.env.BASE_LINK}/auth/signUp/otp`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
            body: JSON.stringify(data),
        })
        const result = await response.json()
        if (response.ok) {
            localStorage.setItem('authUser', JSON.stringify(result))
            setIsAuth(true)
            navigator("/");
            toast.success("Sign Up Success");
        } else {
            toast.error(result.message);
        }




    }
    return { signUpValidation };
}


function handleErrorInputs(email, password, name, ConfirmPassword) {
    if (!email || !password || !name) {
        toast.error('Please fill all fields');
        return false;
    } else if (password.length < 6) {
        toast.error('Password must be at least 6 characters long')
        return false;
    } else if (password != ConfirmPassword){
        toast.error('Password and Confirm Password must be same')
        return false;
    }
    return true;
}
function handleErrorInput(email, otp) {
    if (!email || !otp) {
        toast.error('Please fill all fields');
        return false;
    }
    return true;
}
export { useSignUp, useSignUpValidation };