import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const useLogOut = () => {
  const navigate = useNavigate();
  const { setIsAuth } = useAuthContext();

  const logOut = async () => {
    // const response = await fetch(`https://forms-flow-api.vercel.app/api/auth/logOut`, {
    const response = await fetch(`http://localhost:3000/api/auth/logOut`, {
    // const response = await fetch(`${process.env.BASE_LINK}/auth/logOut`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
    });
    const message = await response.json();
    if (response.ok) {
      localStorage.removeItem('authUser');
      setIsAuth(false);
      toast.success(message.message);
      navigate('/login');
    } else {
      toast.error(message.message);
    }
  };

  return { logOut };
};

export default useLogOut;
