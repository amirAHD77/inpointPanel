export const randomFullKeyboard = () => {
  const charcters = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    "-",
    "=",
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "[",
    "]",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    ";",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    ",",
    ".",
    "/",
  ];
  const result = [
    "` 1 2 3 4 5 6 7 8 9 0 - = {backspace}",
    "{tab} q w e r t y u i o p [ ] \\",
    "{capslock} a s d f g h j k l ; ' {enter}",
    "{shiftleft} z x c v b n m , . / {shiftright}",
    ".com @ {space}",
  ];
  let i = charcters.length;
  let save = "";
  let j = 0;
  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    save += charcters[j];
    if (i === 32) {
      result[0] = `\` ${save.match(/./g).join(" ")} {backspace}`;
      save = "";
    }
    if (i === 20) {
      result[1] = `{tab} ${save.match(/./g).join(" ")} \\`;
      save = "";
    }
    if (i === 10) {
      result[2] = `{capslock} ${save.match(/./g).join(" ")} ' {enter}`;
      save = "";
    }
    if (i === 0) {
      result[3] = `{shiftleft} ${save.match(/./g).join(" ")} {shiftright}`;
      save = "";
    }
    result[4] = ".com @ {space}";

    charcters.splice(j, 1);
  }
  return result;
};

export const randomShiftFullKeyboard = () => {
  const charcters = [
    "~",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "+",
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "{",
    "}",
    "|",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    ":",
    '"',
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    "<",
    ">",
    "?",
  ];
  const result = [
    "~ ! @ # $ % ^ & * ( ) _ + {backspace}",
    "{tab} Q W E R T Y U I O P { } |",
    '{capslock} A S D F G H J K L : " {enter}',
    "{shiftleft} Z X C V B N M < > ? {shiftright}",
    ".com @ {space}",
  ];
  let i = charcters.length;
  let save = "";
  let j = 0;
  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    save += charcters[j];
    if (i === 34) {
      result[0] = `${save.match(/./g).join(" ")} {backspace}`;
      save = "";
    }
    if (i === 21) {
      result[1] = `{tab} ${save.match(/./g).join(" ")}`;
      save = "";
    }
    if (i === 10) {
      result[2] = `{capslock} ${save.match(/./g).join(" ")} {enter}`;
      save = "";
    }
    if (i === 0) {
      result[3] = `{shiftleft} ${save.match(/./g).join(" ")} {shiftright}`;
      save = "";
    }
    result[4] = ".com @ {space}";

    charcters.splice(j, 1);
  }
  return result;
};
