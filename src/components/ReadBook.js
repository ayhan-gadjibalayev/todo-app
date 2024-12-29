import { SiBookstack } from "react-icons/si";
import { IoTimeOutline } from "react-icons/io5";

export default function ReadBook(props) {
  const { bookname, time } = props;

  return (
    <div className="center-block">
      <div className="all-block-left">
        <input
          type="checkbox"
          style={{ width: "20px", height: "20px", margin: "0px 0px 0px 10px" }}
        />
        <span style={{ marginLeft: "10px", marginRight: "10px" }}>
          {bookname}
        </span>
        <SiBookstack />
      </div>
      <div className="all-block-right">
        <div className="time">
          <IoTimeOutline style={{ fontSize: "20px" }} />
          <span>{time}</span>
        </div>
        <span className="theer-dots">⁝</span>
      </div>
    </div>
  );
}
