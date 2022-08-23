function setCSSVariable(element, name, value) {
  element.style.setProperty(name, value);
}

const IconType = [
  "accountancy",
  "administration",
  "algebra",
  "all",
  "arabic",
  "art",
  "artmusic",
  "astronomy",
  "belarus",
  "belarus-alt",
  "biology",
  "business",
  "catala",
  "chemistry",
  "chinese",
  "economics",
  "egzam",
  "exam",
  "english",
  "environment",
  "ethics",
  "euskara",
  "first-aid",
  "french",
  "galego",
  "geography",
  "geology",
  "geometry",
  "german",
  "grammar",
  "health",
  "history",
  "india-lang",
  "indonesian-lang",
  "informatics",
  "italian",
  "japanese",
  "kazach",
  "kazach-alt",
  "kyrgyz",
  "language",
  "latin",
  "law",
  "life-science",
  "literature",
  "logic",
  "mathematics",
  "music",
  "otherlanguages",
  "others",
  "pedagogics",
  "philosophy",
  "physical-education",
  "physics",
  "politics",
  "psychology",
  "religion",
  "russian",
  "russian-alt",
  "science",
  "security",
  "skills",
  "social-science",
  "sociology",
  "spanish",
  "statistics",
  "technology",
  "tourism",
  "traffic",
  "turkish",
  "ukrainian",
  "ukrainian-alt",
  "ukrainian-literature",
  "uzbek",
  "wos",
];

const colors = {
  black: "#000000",
  white: "#ffffff",
  "blue-70": "#002238",
  "blue-60": "#014a82",
  "blue-50": "#0089e3",
  "blue-40": "#4fb3f6",
  "blue-30": "#b9e2fe",
  "blue-20": "#d9f0ff",
  "blue-10": "#edf8ff",
  "green-70": "#002e13",
  "green-60": "#00672e",
  "green-50": "#24a865",
  "green-40": "#60d399",
  "green-30": "#9ce8c2",
  "green-20": "#e3f7ed",
  "green-10": "#f0faf5",
  "indigo-70": "#0c114d",
  "indigo-60": "#133191",
  "indigo-50": "#163bf3",
  "indigo-40": "#6d83f3",
  "indigo-30": "#bdc7fb",
  "indigo-20": "#ebeeff",
  "indigo-10": "#f2f4ff",
  "red-70": "#8d1a00",
  "red-60": "#cf1d00",
  "red-50": "#ff341a",
  "red-40": "#ff7968",
  "red-30": "#ffc7bf",
  "red-20": "#ffe8e5",
  "red-10": "#fff1f0",
  "yellow-70": "#5b3100",
  "yellow-60": "#935000",
  "yellow-50": "#c98600",
  "yellow-40": "#fbbe2e",
  "yellow-30": "#fedd8e",
  "yellow-20": "#fff3d6",
  "yellow-10": "#fffaf0",
  "gray-70": "#323c45",
  "gray-60": "#46535f",
  "gray-50": "#687b8c",
  "gray-40": "#c3d1dd",
  "gray-30": "#e1eaf1",
  "gray-20": "#ebf2f7",
  "gray-10": "#f5f8fa",
};

const gradients = {
  "green-yellow":
    "linear-gradient(180.0deg, rgba(156, 232, 194, 1.0) 0%, rgba(251, 190, 46, 1.0) 100%)",
  "navy-blue":
    "linear-gradient(180.0deg, rgba(12, 17, 77, 1.0) 0%, rgba(1, 74, 130, 1.0) 100%)",
  "yellow-white":
    "linear-gradient(180.0deg, rgba(254, 221, 142, 1.0) 0%, rgba(235, 238, 255, 1.0) 100%)",
  "pink-blue":
    "linear-gradient(180.0deg, rgba(255, 121, 104, 1.0) 0%, rgba(185, 226, 254, 1.0) 100%)",
  "blue-green":
    "linear-gradient(180.0deg, rgba(109, 131, 243, 1.0) 0%, rgba(0, 103, 46, 1.0) 100%)",
  "orange-red":
    "linear-gradient(180.0deg, rgba(201, 134, 0, 1.0) 0%, rgba(207, 29, 0, 1.0) 100%)",
  "blue-green":
    "linear-gradient(180.0deg, rgba(79, 179, 246, 1.0) 0%, rgba(36, 168, 101, 1.0) 100%)",
  "brown-blue":
    "linear-gradient(180.0deg, rgba(147, 80, 0, 1.0) 0%, rgba(19, 49, 145, 1.0) 100%)",
};

const rows = 10;
const cols = 10;
const canvasSize = 800;
const cellSize = canvasSize / rows;
const emptyOption = "-";

const colsSetup = {
  min: 1,
  max: 20,
  step: 1,
};
const rowsSetup = { ...colsSetup };
const sceneRotationSetup = {
  min: 0,
  max: 360,
  step: 10,
};
const iconRotationSetup = {
  min: 0,
  max: 360,
  step: 10,
};
const scaleSetup = {
  min: 0.1,
  max: 20,
  step: 0.1,
};
const iconScaleSetup = {
  min: 0,
  max: 10,
  step: 0.1,
};
const animationDurationSetup = {
  min: 0,
  max: 10,
  step: 1,
};

const iconAmountSetup = {
  min: 1,
  max: IconType.length - 1,
  step: 1,
};
const defaultBackgroundColor = emptyOption;

const PARAMS = {
  rows: rowsSetup.max / 2,
  cols: colsSetup.max / 2,
  rotation: iconRotationSetup.min,
  sceneRotation: sceneRotationSetup.min,
  iconAmount: 3,
  backgroundColor: defaultBackgroundColor,
  useMonoIcons: false,
  iconColor1: emptyOption,
  iconColor2: emptyOption,
  iconColor3: emptyOption,
  scale: 1,
  animationDuration: 4,
  useIconRotation: true,
  iconScale: iconScaleSetup.min,
  alignWithGrid: true,
};

const pane = new Tweakpane.Pane({ title: "Play with this ✨" });

let cellSizeX = canvasSize / PARAMS.rows;
let cellSizeY = canvasSize / PARAMS.cols;

function refreshCanvas() {
  calculate();
  clear();
  render();
}

pane.on("change", (ev) => {
  refreshCanvas();
  console.log("changed: " + JSON.stringify(ev.value));
});

function calculate() {
  cellSizeX = canvasSize / PARAMS.rows;
  cellSizeY = canvasSize / PARAMS.cols;
}

pane.addInput(PARAMS, "rows", {
  label: "rows",
  ...rowsSetup,
});

pane.addInput(PARAMS, "cols", {
  label: "cols",
  ...colsSetup,
});

pane.addInput(PARAMS, "scale", {
  label: "scale",
  ...scaleSetup,
});

pane.addInput(PARAMS, "iconScale", {
  label: "icon size variation",
  ...iconScaleSetup,
});

pane.addInput(PARAMS, "sceneRotation", {
  label: "scene rotation X",
  ...sceneRotationSetup,
});

pane.addInput(PARAMS, "iconAmount", {
  label: "icon amount",
  ...iconAmountSetup,
});

pane.addInput(PARAMS, "animationDuration", {
  label: "animation duration",
  ...animationDurationSetup,
});

pane.addInput(PARAMS, "useIconRotation");

pane.addInput(PARAMS, "alignWithGrid");

const paneColorOptions = Object.keys(colors).map((color) => {
  return {
    text: color,
    value: colors[color],
  };
});

const paneGradientOptions = Object.keys(gradients).map((gradient) => {
  return {
    text: `gradient: ${gradient}`,
    value: gradients[gradient],
  };
});

const colorOptions = { [emptyOption]: emptyOption, ...colors };

pane.addInput(PARAMS, "backgroundColor", {
  options: { ...colorOptions, ...gradients },
});

pane.addSeparator();
pane.addInput(PARAMS, "useMonoIcons");
pane.addInput(PARAMS, "iconColor1", {
  options: colorOptions,
});
pane.addInput(PARAMS, "iconColor2", {
  options: colorOptions,
});
pane.addInput(PARAMS, "iconColor3", {
  options: colorOptions,
});
pane.addSeparator();

const DEFAULT_PRESET = pane.exportPreset();

const refreshButton = pane.addButton({ title: "Refresh icons 🔄" });
refreshButton.on("click", () => {
  refreshCanvas();
});

const randomizeSettingsButton = pane.addButton({ title: "Randomize 🎲" });
randomizeSettingsButton.on("click", () => {
  function getRandomWithStep(min, max, step) {
    const x = Math.floor(Math.random() * ((max - min + step) / step));
    return step * x + min;
  }

  function randomizeOption(option) {
    return getRandomWithStep(...Object.values(option));
  }
  const backgroundColors = { ...colors, ...gradients };
  const backgroundColorOptions = {
    min: 1,
    max: Object.values(backgroundColors).length,
    step: 1,
  };
  const iconColorOptions = {
    min: 1,
    max: Object.values(colors).length,
    step: 1,
  };
  const randomBackground =
    Object.values(backgroundColors)[randomizeOption(backgroundColorOptions)];

  const useMonoIcons = Math.random() < 0.4;
  let randomIconColor1 = emptyOption;
  let randomIconColor2 = emptyOption;
  let randomIconColor3 = emptyOption;

  function randomizeIconColor(colors, iconColorOptions) {
    return Object.values(colors)[randomizeOption(iconColorOptions)];
  }

  if (useMonoIcons) {
    randomIconColor1 = randomizeIconColor(colors, iconColorOptions);
    if (Math.random() < 0.6) {
      randomIconColor2 = randomizeIconColor(colors, iconColorOptions);
      if (Math.random() < 0.5) {
        randomIconColor3 = randomizeIconColor(colors, iconColorOptions);
      }
    }
  }

  const rowsNumber =
    Math.random() < 0.5
      ? randomizeOption({
          min: (rowsSetup.max * 4) / 10,
          max: (rowsSetup.max * 7) / 10,
          step: 1,
        })
      : randomizeOption(rowsSetup);
  const colsNumber =
    Math.random() < 0.7 ? rowsNumber : randomizeOption(colsSetup);
  const iconsAmount =
    Math.random() < 0.5
      ? randomizeOption({ min: iconAmountSetup.min, max: 3, step: 1 })
      : randomizeOption(iconAmountSetup);

  const scale =
    Math.random() < 0.5
      ? randomizeOption({ min: 0.3, max: 5, step: scaleSetup.step })
      : randomizeOption(scaleSetup);

  const iconsScale =
    Math.random() < 0.3
      ? 0
      : Math.random() < 0.5
      ? randomizeOption({
          min: 0.5,
          max: 2,
          step: iconScaleSetup.step,
        })
      : randomizeOption(iconScaleSetup);

  const randomPreset = {
    rows: rowsNumber,
    cols: colsNumber,
    rotation: randomizeOption(iconRotationSetup),
    sceneRotation:
      Math.random() < 0.25 ? randomizeOption(sceneRotationSetup) : 0,
    iconAmount: iconsAmount,
    backgroundColor: randomBackground,
    useMonoIcons: useMonoIcons,
    iconColor1: randomIconColor1,
    iconColor2: randomIconColor2,
    iconColor3: randomIconColor3,
    scale: scale,
    animationDuration: randomizeOption(animationDurationSetup),
    useIconRotation: Math.random() < 0.5,
    iconScale: iconsScale,
    alignWithGrid: Math.random() < 0.5,
  };

  pane.importPreset(randomPreset);
});

const resetToDefaultsButton = pane.addButton({ title: "Reset to default" });
resetToDefaultsButton.on("click", () => {
  pane.importPreset(DEFAULT_PRESET);
});

function getIconScope(size) {
  const scope = [];
  while (scope.length < size) {
    scope.push(Math.floor(IconType.length * Math.random()));
  }
  return scope;
}

function setBackground() {
  document.getElementById("canvas").style.background = PARAMS.backgroundColor;
}

function getIcon(iconScope = []) {
  const icon =
    IconType[iconScope[Math.floor(iconScope.length * Math.random())]];
  const iconSize = cellSize * 0.6 + cellSize * Math.random() * PARAMS.iconScale;
  const rotate = PARAMS.useIconRotation ? PARAMS.rotation * Math.random() : 1;
  const x = PARAMS.alignWithGrid ? 0 : (Math.random() * cellSize) / 4;
  const y = PARAMS.alignWithGrid ? 0 : (Math.random() * cellSize) / 4;

  const delay = PARAMS.animationDuration * Math.random();
  const iconColors = [
    PARAMS.iconColor1,
    PARAMS.iconColor2,
    PARAMS.iconColor3,
  ].filter((el) => el !== emptyOption);

  const color = iconColors[Math.floor(iconColors.length * Math.random())];

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.innerHTML = `<use xlink:href="#icon-subject-${
    PARAMS.useMonoIcons ? "mono-" : ""
  }${icon}"></use>`;
  svg.style = `fill: ${color}; width: ${iconSize}px; height: ${iconSize}px`;

  setCSSVariable(svg, "--rotate", rotate + "deg");
  setCSSVariable(svg, "--x", x + "px");
  setCSSVariable(svg, "--y", y + "px");
  setCSSVariable(svg, "--animationDuration", PARAMS.animationDuration + "s");
  setCSSVariable(svg, "--animationDelay", delay + "s");
  return svg;
}

// Render slots divs
function render() {
  setBackground();

  const slotsWrapper = document.getElementById("slotsWrapper");
  const iconScope = getIconScope(PARAMS.iconAmount);
  // slotsWrapper.style.transform= `rotate(${PARAMS.sceneRotation}deg) scale(${PARAMS.scale})`;
  slotsWrapper.style.transform = `perspective(400px) rotate3d(1, 0, 0, ${PARAMS.sceneRotation}deg) scale(${PARAMS.scale})`;

  for (let i = 0; i < PARAMS.rows; i++) {
    for (let j = 0; j < PARAMS.cols; j++) {
      const newDiv = document.createElement("div");
      newDiv.setAttribute("id", `slot-${i}${j}`);
      newDiv.setAttribute("class", "slot");
      newDiv.style.position = "absolute";
      newDiv.style.width = `${cellSizeX}px`;
      newDiv.style.height = `${cellSizeY}px`;
      newDiv.style.left = cellSizeX * i + "px";
      newDiv.style.top = cellSizeY * j + "px";

      const svgContainer = document.createElement("div");

      const text = document.createElement("div");
      text.innerHtml = "h";
      svgContainer.appendChild(getIcon(iconScope));
      // svgContainer.appendChild(text);

      svgContainer.setAttribute("class", "svg-container");
      newDiv.appendChild(svgContainer);

      slotsWrapper.appendChild(newDiv);
    }
  }
}

function clear() {
  document.getElementById("slotsWrapper").innerHTML = "";
}

function main() {
  render();
}

main();
