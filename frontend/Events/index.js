var btn_clicker = () => {
  alert("Button has been clicked");
};

const img_clicker = () => {
  alert("Image has been clicked");
};

const form_submitter = (e) => {
  alert("Form has been submitted sucessfuully");
};

const inp_changer = () => {
  console.log("change has occuered");
};

const realtime_changer = () => {
  console.log("key has been pressed");
};
const ip1 = document.getElementById("ip1");

ip1.addEventListener("change", inp_changer);
ip1.addEventListener("keyup", realtime_changer);
