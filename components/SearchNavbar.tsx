import ButtonSection from "./atoms/ButtonSection";
import Input from "./atoms/Input";
import IconMenu from "./svgs/IconMenu";

const SearchNavBar = () => {
  return (
    <div
        id="white-navbar"
        className="h-24 flex justify-evenly items-center shadow-md max-sm:justify-evenly"
      >
        <div className="w-96 flex justify-evenly max-sm:hidden">
          <ButtonSection name='Section'/>
          <ButtonSection name='Section'/>
          <ButtonSection name='Section'/>
        </div>
        <div className="h-11 w-11 rounded-full sm:hidden">
          <IconMenu />
        </div>

        <div className="max-sm:w-72 ">
          <Input />
        </div>
      </div>
  );
};

export default SearchNavBar;