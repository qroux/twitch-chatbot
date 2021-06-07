export const actionType = {
  dice: '!dice',
};

export const rollDice = () => {
  const sides = 6;
  return Math.floor(Math.random() * sides) + 1;
};
