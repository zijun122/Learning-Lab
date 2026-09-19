const requiredFields = ["request_url", "method", "status", "content_type"];
const statusBox = document.querySelector("#status");
const fieldsBox = document.querySelector("#fields");
const buttons = [...document.querySelectorAll("[data-source]")];

function setStatus(kind, message, source) {
  statusBox.className = "status " + kind;
  statusBox.innerHTML = "<strong>" + message + "</strong><div class=\"meta\">读取文件：" + source + "</div>";
}

function showFields(data) {
  fieldsBox.innerHTML = Object.entries(data).map(function (entry) {
    const key = entry[0];
    const value = entry[1];
    return "<article class=\"field\"><span>" + key + "</span><strong>" + String(value) + "</strong></article>";
  }).join("");
}

async function loadObservation(source) {
  fieldsBox.innerHTML = "";
  setStatus("", "正在读取……", source);
  try {
    const response = await fetch(source, { cache: "no-store" });
    if (!response.ok) throw new Error("HTTP " + response.status + "，找不到 " + source);
    const data = await response.json();
    const missing = requiredFields.filter(function (field) { return !(field in data); });
    if (missing.length) throw new Error("字段缺失：" + missing.join("、"));
    showFields(data);
    setStatus("success", "数据读取成功", source);
  } catch (error) {
    setStatus("error", "读取失败：" + error.message, source);
  }
}

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    buttons.forEach(function (item) { item.classList.remove("active"); });
    button.classList.add("active");
    loadObservation(button.dataset.source);
  });
});

buttons[0].click();