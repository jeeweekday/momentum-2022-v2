const bgArr = ["0.jpg","1.jpg","2.jpg"];
const bgNum = Math.floor(Math.random() * bgArr.length);
const bgPick = bgArr[bgNum]
const bgBox = document.querySelector("#bg-box");
const bgImg = document.createElement("img");
bgImg.src = `imgs/${bgPick}`;
bgBox.appendChild(bgImg);

//화변 사이즈별로 어떻게 적용할것인가 !?