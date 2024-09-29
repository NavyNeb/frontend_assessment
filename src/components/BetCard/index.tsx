import Button from "../shared/Button";
import Card from "../shared/Card";
import CardImage from "./CardImage";
import Rating from "./Rating";
import Bonuses from "./Bonuses";

import casinoLogo from "../../assets/casino_logo.svg";

type BetCardProps = {
  casinoName?: string;
  betAmount?: number;
  getAmount?: number;
  ratingCount?: number;
  onClickBet?: () => void;
};

const BetCard: React.FC<BetCardProps> = ({
  casinoName = "Grosvenor Casinos",
  betAmount = 10,
  getAmount = 400,
  ratingCount = 5,
  onClickBet = () => null,
}) => {
  return (
    <Card>
      <div className="bg-transparent col-flex lg-desktop:flex-row lg-desktop:space-y-0 lg-desktop:items-center lg-desktop:justify-center lg-desktop:gap-x-8">
        {/* Card details content */}
        <div className="col-flex large-tablet:flex-row large-tablet:space-y-0 large-tablet:gap-x-8 lg-desktop:items-center lg-desktop:justify-center">
          <CardImage src={casinoLogo} />
          <div className="col-flex large-tablet:space-y-0 large-tablet:items-start large-tablet:justify-between lg-desktop:flex-row lg-desktop:items-center lg-desktop:justify-center lg-desktop:gap-x-8">
            <Rating name={casinoName} count={ratingCount} />
            <Bonuses bet={betAmount} get={getAmount} />
          </div>
        </div>
        {/* CTA card section */}
        <div>
          <Button title="Bet Now" onClick={onClickBet} />
        </div>
      </div>
    </Card>
  );
};

export default BetCard;
