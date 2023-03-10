import DeckSizeChooser from "../shared/DeckSizeChooser/DeckSizeChooser";
import StartNewGameButton from "../shared/Buttons/StartNewGameButton";
import { CenteredWrapper, FlexWrapper, PokemonTitle } from "./MainPage.styled";
import "./MainPage.css";
import GameRules from "../shared/GameRules/GameRules";

const MainPage = () => {
  return (
    <div className="main-page-div">
      <CenteredWrapper>
        <PokemonTitle
          src={require("../cards/assets/backgroundsAndTitles/pokemon-title.png")}
          alt=""
        />

        <FlexWrapper>
          <DeckSizeChooser />
          <StartNewGameButton />
        </FlexWrapper>
        <GameRules />
      </CenteredWrapper>
    </div>
  );
};
export default MainPage;
