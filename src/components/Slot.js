function Slot({ item, id, isSelected }) {
  const itemClass = item.stat ? " active " + item.stat : "";

  return (
    <div className={"slot" + itemClass} onClick={() => isSelected(id)}>
      <img src={item.img} alt="" />
    </div>
  );
}

export default Slot;
