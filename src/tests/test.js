test('testing Character constructor function', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  expect(obj).toEqual(obj);
});
