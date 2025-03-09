import { SiBookstack } from "react-icons/si";
import { IoTimeOutline } from "react-icons/io5";

export default function ReadBook(props) {

  const { task, onChange, } = props;

  function setChecked(event) {
    onChange({...task, isChecked: !task.isChecked});
  }

  return (
    <div className="center-block">
      <div className="all-block-left">
        <input
          type="checkbox"
          checked={task.isChecked}
          style={{ width: "20px", height: "20px", margin: "0px 0px 0px 10px" }}
          onChange={setChecked}
        />
        <span className={task.isChecked ? "is-active" : "line-through"}>
          {task.title}
        </span>
        <SiBookstack />
      </div>
      <div className="all-block-right">
        <div className="time">
          <IoTimeOutline style={{ fontSize: "1px" }} />
          <span>{task.date}</span>
        </div>
        <span className="theer-dots">⁝</span>
      </div>
    </div>
  );
}