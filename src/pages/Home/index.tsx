import { useNavigate } from "react-router-dom";
import LoginScreen from "../Login";

export default function HomeScreen() {
  const navigate = useNavigate();

  return (
    <>
    <LoginScreen/>
    </>
  );
}
