import { FaStar } from "react-icons/fa";

type RatingProps = {
  rating: number;
};

function Rating({ rating }: RatingProps) {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>

      {[1, 2, 3, 4].map((star) => (

        <FaStar
          key={star}

          color={star <= rating ? "#2196F3" : "#d3d3d3"}

          size={20}
        />

      ))}

    </div>
  );
}

export default Rating;