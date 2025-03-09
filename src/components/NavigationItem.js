export default function NavigationItem(props) {
  const taskList = props.taskList;
  const { active, setActive } = props;

  const handleClick = (id) => {
    setActive(id);
  };

  return (
    <div className="private-list">
      {taskList && taskList.map((item) => (
        <div
          className={`list-item ${active === item.id ? "active" : ""}`}
          key={item.id}
          onClick={() => handleClick(item.id)}
        >
          <div>
            {item.icon}
            <span className="list-container">{item.name}</span>
          </div>
          <span className="number">{item.tasks?.length ?? 0}</span>
        </div>
      ))}
    </div>
  );
}