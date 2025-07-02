import { useState } from "react";
import chicken from "../../public/chicken.webp";
import banana from "../../public/banana.webp";

interface Props {
  index: number;
  type: "chicken" | "banana";
  isClickable: boolean,
  onClick: () => void;
}

function Cell({ index, type, isClickable, onClick }: Props) {
  let [isClicked, setIsClicked] = useState(false);

  const getImage = (type: string) => {
    const image = type === "chicken" ? chicken : banana;
    return <img height="50" src={image} alt="type" />;
  };

  const getCellClasses = () => {
    const active = (isClickable && !isClicked) ? "active" : "inactive";
    const cellType = (isClicked && type === "chicken"
          ? " chicken"
          : isClicked && type === "banana"
          ? " banana"
          : "");
    return `cell ${active} ${cellType}`;
  }

  return (
    <div
      className={getCellClasses()}
      onClick={() => {
        if (isClickable && !isClicked) {
          onClick();
          setIsClicked(true);
        }
      }}
    >
      {isClicked ? getImage(type) : index}
    </div>
  );
}

export default Cell;
