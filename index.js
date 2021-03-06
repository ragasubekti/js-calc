let lists = [];

const onCalculate = () => {
  const operator = document.getElementById("operator").value;
  const first = parseInt(document.getElementById("first").value);
  const second = parseInt(document.getElementById("second").value);

  let result = 0;

  switch (operator) {
    case "-":
      result = first - second;
      break;
    case "/":
      result = (first / second).toFixed(2);
      break;
    case "x":
      result = first * second;
      break;
    default:
      result = first + second;
  }

  result = isNaN(result) ? "(╯°□°)╯︵ ┻━┻" : result;

  document.getElementById("result").innerHTML = result;
};

const calculateShape = () => {
  const sisi = parseInt(document.getElementById("sisi").value);
  const result = sisi ** 2;

  document.getElementById("luas-result").innerHTML = result;
};

const onAddList = () => {
  const newListItem = document.getElementById("list-item").value;

  if (newListItem.length <= 0) {
    alert("New List Item Cannot Be Empty");
    return; // Kill The Function
  }

  lists.push(newListItem);

  let currentListHtml = "";

  for (let i = 0; i < lists.length; i++) {
    currentListHtml += `<li>${lists[i]}</li>`;
  }

  document.getElementById("list").innerHTML = currentListHtml;
};
