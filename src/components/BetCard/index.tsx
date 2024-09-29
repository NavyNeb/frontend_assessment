import Button from "../shared/Button";
import Card from "../shared/Card";
import CardImage from "./CardImage";
import Rating from "./Rating";
import Bonuses from "./Bonuses";

import casinoLogo from "../../assets/casino_logo.svg";

const BetCard = () => {
  return (
    <Card>
      <div
        className="
          bg-transparent
          flex-1 
          flex
          flex-col
          space-y-4
          lg-desktop:flex-row
          lg-desktop:items-center
          lg-desktop:justify-center
          lg-desktop:gap-x-8 
      "
      >
        {/* Card details content */}
        <div
          className="
          flex-1 
          flex
          flex-col
          space-y-4
          large-tablet:flex-row
          large-tablet:space-y-0
          large-tablet:gap-x-8
          lg-desktop:items-center
          lg-desktop:justify-center
        "
        >
          <CardImage src={casinoLogo} />
          <div
            className="
            flex-1 
            flex
            flex-col
            space-y-4
            large-tablet:space-y-0  
            large-tablet:items-start
            large-tablet:justify-between
            lg-desktop:flex-row
            lg-desktop:items-center
            lg-desktop:justify-center
            lg-desktop:gap-x-8 
          "
          >
            <Rating name="Grosvenor Casinos" count={5} />
            <Bonuses bet={10} get={400} />
          </div>
        </div>
        {/* CTA card section */}
        <div className="">
          <Button title="Bet Now" onClick={() => null} />
        </div>
      </div>
    </Card>
  );
};

export default BetCard;
