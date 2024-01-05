/* eslint-disable react/prop-types */
import "../style/DropDown.css";
import { useDispatch } from "react-redux";
import { randomQuote } from "../slice/quoteSlice";
const DropDown = ({ tags }) => {
  const dispatch = useDispatch();
  const handleTags = (e) => {
    const tagValue = e.target.value;
    dispatch(randomQuote(tagValue));
  };
  return (
    <select className="home-page-dropdown" onChange={(e) => handleTags(e)}>
      <option>Please choose one option</option>
      {tags.map((tag) => {
        return (
          <>
            <option value={tag.name} key={tag._id}>
              {tag.name}
            </option>
            ;
          </>
        );
      })}
    </select>
  );
};

export { DropDown };
