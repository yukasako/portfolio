let world;

const Yuka = async () => {
  let res = await fetch("you");
  let you = await res.json();
  if (you.input) {
    let world = "fun!";
    return world;
  }
};

if (world === "boring") {
  Yuka();
}
