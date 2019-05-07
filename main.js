let changeBackgroundColor = function() {
  let hexaList = [];
  let hexaCode = [];
  for (i = 0; i <= 9; i++) {
    hexaList.push(i);
  };
  hexaList.push("A", "B", "C", "D", "E", "F");
  for (i = 0; i < 6; i++) {
    let rdm = Math.floor(Math.random()*16);
    hexaCode.push(hexaList[rdm]);
  }
  let yourHexaCode = ("#" + hexaCode[0] + hexaCode[1] + hexaCode[2] + hexaCode[3] + hexaCode[4] + hexaCode[5]).toString();

  document.getElementById("colorBox").style.backgroundColor = yourHexaCode;
  document.getElementById("color").textContent = yourHexaCode;
  document.getElementById("color").style.color = yourHexaCode;
}
