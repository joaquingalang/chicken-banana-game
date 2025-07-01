import type { ReactNode } from "react";
import chicken from "../../public/chicken.webp";
import banana from "../../public/banana.webp";

interface Props {
  className?: string;
  type: "chicken" | "banana";
  children: ReactNode;
}

function ScoreKeeper({ className, type, children }: Props) {
  return (
    <div className={"score-box " + className}>
      <img
        height="45"
        src={type === "chicken" ? chicken : banana}
        alt="Image not found"
      />
      <p>{children?.toString()}</p>
      <br />
    </div>
  );
}

export default ScoreKeeper;
