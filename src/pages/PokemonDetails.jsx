import { useNavigate, useParams } from "react-router-dom";
import PokemonCardDetails from "../components/PokemonCardDetail";

export default function PokemonDetails() 
{
  const { id } = useParams();
  const navigate = useNavigate();
  const currentId = Number(id);

  const handlePrev = () => 
  {
    if (currentId > 1) {
      navigate(`/pokemon/${currentId - 1}`);
    }
  };

  const handleNext = () => 
  {
    if (currentId < 151) {
      navigate(`/pokemon/${currentId + 1}`);
    }
  };

  return (
    <PokemonCardDetails
      id={currentId}
      onPrev={handlePrev}
      onNext={handleNext}
    />
  );
}