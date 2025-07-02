import { useState } from "react";
import chicken from "../../public/chicken.webp";
import banana from "../../public/banana.webp";

interface Props {
  index: number;
  type: "chicken" | "banana";
  onClick: () => void;
}

function Cell({ index, type, onClick }: Props) {
  let [isClicked, setIsClicked] = useState(false);

  const getImage = (type: string) => {
    const image = type === "chicken" ? chicken : banana;
    return <img height="50" src={image} alt="type" />;
  };

  return (
    <div
      className={
        "cell" +
        (isClicked && type === "chicken"
          ? " chicken"
          : isClicked && type === "banana"
          ? " banana"
          : "")
      }
      onClick={() => {
        onClick();
        setIsClicked(true);
      }}
    >
      {isClicked ? getImage(type) : index}
    </div>
  );
}

export default Cell;
