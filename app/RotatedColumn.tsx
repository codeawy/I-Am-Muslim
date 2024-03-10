import { TRotatedWord } from "@/types";

interface IProps {
  data: TRotatedWord[];
}

const RotatedColumn = ({ data }: IProps) => {
  return (
    <div className="flex items-center justify-center py-5">
      {data.map(({ text, isRotated }, idx) => (
        <span key={idx} className={`px-2 ${isRotated ? "-rotate-90" : ""} text-xs break-words`}>
          {text}
        </span>
      ))}
    </div>
  );
};

export default RotatedColumn;
