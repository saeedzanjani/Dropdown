import DropDownMenu from "../../components/dropDownMenu";
import { DROPDOWN_ITEMS } from "../../utils/mockData";

const Home = () => {
  return (
    <>
      <DropDownMenu
        DropDownList={DROPDOWN_ITEMS}
      />
    </>
  );
};

export default Home;
