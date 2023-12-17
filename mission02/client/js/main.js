/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/
// const nav = document.querySelector(".nav");
// const visualImage = document.querySelector(".visual img");

// function clickHandler(event) {
//   let elem = event.target;
//   while (!elem.classList.contains("is-active")) {
//     elem = elem.parentNode;

//     if (elem.nodeName == "BODY") {
//       elem = null;
//       return;
//     }
//   }
//   visualImage.src = `./assets/${data[index - 1].name.toLowerCase}.jpeg`;
// }

// nav.addEventListener("click", clickHandler);

const nav = getNode(".nav");
const visualImage = getNode(".visual img");
const nickName = getNode(".nickName");

function handleClick(e) {
  let li = e.target.closest("li");
  if (!li) return;

  let index = li.dataset.index;

  // console.log(li);

  const list = Array.from(nav.children);
  list.forEach((item) => item.classList.remove("is-active"));

  document.body.style.background = `linear-gradient(to bottom, ${
    data[index - 1].color[0]
  },${data[index - 1].color[1]})`;

  visualImage.src = `./assets/${data[index - 1].name}.jpeg`;

  nickName.innerHTML = `${data[index - 1].name}`;
}

nav.addEventListener("click", handleClick);

// const data = [
//   {
//     color: ["#ff6a00", "#720400"],
//     name: "EMBER",
//     alt: "엠버 포스터",
//   },
//   {
//     color: ["#1ca9f8", "#000054"],
//     name: "WADE",
//     alt: "웨이드 포스터",
//   },
//   {
//     color: ["#98d00f", "#002906"],
//     name: "CLOD",
//     alt: "클로드 포스터",
//   },
//   {
//     color: ["#d968e6", "#30003c"],
//     name: "GALE",
//     alt: "게일 포스터",
//   },
// ];
