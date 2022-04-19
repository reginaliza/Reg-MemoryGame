import { useState } from "react";
import Slot from "./Slot";

function Characters() {
  const [items, setItems] = useState(
    [
      { id: 1, img: "/img/chimmy.png", stat: "" },
      { id: 1, img: "/img/chimmy.png", stat: "" },
      { id: 2, img: "/img/cooky.png", stat: "" },
      { id: 2, img: "/img/cooky.png", stat: "" },
      { id: 3, img: "/img/koya.png", stat: "" },
      { id: 3, img: "/img/koya.png", stat: "" },
      { id: 4, img: "/img/mang.png", stat: "" },
      { id: 4, img: "/img/mang.png", stat: "" },
      { id: 5, img: "/img/rj.png", stat: "" },
      { id: 5, img: "/img/rj.png", stat: "" },
      { id: 6, img: "/img/shooky.png", stat: "" },
      { id: 6, img: "/img/shooky.png", stat: "" },
      { id: 7, img: "/img/tata.png", stat: "" },
      { id: 7, img: "/img/tata.png", stat: "" },
      { id: 8, img: "/img/van.png", stat: "" },
      { id: 8, img: "/img/van.png", stat: "" }
    ].sort(() => Math.random() - 0.5)
  );

  const [previous, setPrevious] = useState(-1);

  function checker(current) {
    if (items[current].id === items[previous].id) {
      items[current].stat = "correct";
      items[previous].stat = "correct";
      setItems([...items]);
      setPrevious(-1);
      let score = document.querySelector("#score").innerHTML;
      score++;
      document.querySelector("#score").innerHTML = score;
    } else {
      items[current].stat = "wrong";
      items[previous].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[previous].stat = "";
        setItems([...items]);
        setPrevious(-1);
      }, 500);
    }
  }

  function isSelected(id) {
    if (previous === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrevious(id);
    } else {
      checker(id);
    }
  }

  return (
    <div className="container">
      {items.map((item, index) => (
        <Slot key={index} item={item} id={index} isSelected={isSelected} />
      ))}
    </div>
  );
}

export default Characters;
