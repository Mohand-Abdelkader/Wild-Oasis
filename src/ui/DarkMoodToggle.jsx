import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import ButtonIcon from "./ButtonIcon";
import { useDarkMood } from "../context/DarkMoodContext";
function DarkMoodToggle() {
  const { isDarkMood, toggleDarkMood } = useDarkMood();
  return (
    <ButtonIcon onClick={toggleDarkMood}>
      {isDarkMood ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default DarkMoodToggle;
