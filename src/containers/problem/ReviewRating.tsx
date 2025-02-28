import { AiFillStar } from "react-icons/ai";

interface RatingProps {
  clicked: boolean[];
  onStarClick: (index: number) => void;
}

export default function ReviewRating({
  clicked,
  onStarClick,
}: RatingProps) {
  const starArray = [0, 1, 2, 3, 4];
  const rating = clicked.filter(Boolean).length;

  return (
    <div className="flex gap-2">
      {starArray.map((el) => {
        return (
          <AiFillStar
            key={el}
            fontSize={40}
            onClick={() => onStarClick(el)}
            className={`cursor-pointer ${
              clicked[el]
                ? "text-yellow-400"
                : "text-gray-300"
            }`}
          />
        );
      })}
      <p>
        {rating === 5
          ? "5.0"
          : rating === 4
          ? "4.0"
          : rating === 3
          ? "3.0"
          : rating === 2
          ? "2.0"
          : rating === 1
          ? "1.0"
          : "0.0"}
      </p>
    </div>
  );
}
