import { tailwindColor } from "@repo/tailwind-config/tailwind.config";
import { colord } from "colord";

const isColorDark = (color: string): string => {
  return colord(color).isDark() ? "#ddd" : "#333";
};

const Color: React.FC = () => {
  return Object.entries(tailwindColor).map(([name, key]) => (
    <ColorBox key={name} name={name} value={key} />
  ));
};

export default Color;

type Props = {
  name: string;
  value: string;
};

const ColorBox: React.FC<Props> = ({ name, value }) => {
  return (
    <div
      className="w-96 h-60 flex flex-col justify-center text-center items-center uppercase"
      style={{
        background: value,
        color: isColorDark(value),
      }}
    >
      <span>{name}</span>
      <span>{value}</span>
    </div>
  );
};
