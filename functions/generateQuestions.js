const generateValue = () => {
  const x = Math.floor(Math.random() * 10 + 1) + 1;
  const y = Math.floor(Math.random() * 10 + 1) + 5;
  const z = Math.floor(Math.random() * 10 + 1) + 8;
  return [x, y, z];
};

export const generateQuesstion = () => {
  const questionValues = generateValue();
  const char = ["X", "Y", "Z"];
  const randomXYZ = [];
  const question = {};

  const generateIndex = new Set();
  while (3 > generateIndex.size) {
    const index = Math.floor(Math.random() * 3);
    generateIndex.add(index);
  }

  generateIndex.forEach((value) => {
    randomXYZ.push(char[value]);
    question[char[value]] = questionValues[value];
  });

  return { question, randomXYZ };
};

