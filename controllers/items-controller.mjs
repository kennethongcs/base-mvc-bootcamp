export default function initItemsController(db) {
  // controller that gives a callback with the variables below
  const items = [
    {
      name: 'banana',
      price: '$2',
      category: 'fruits',
    },
    {
      name: 'apple',
      price: '$1',
      category: 'fruits',
    },
    {
      name: 'salmon',
      price: '$22',
      category: 'fish',
    },
    {
      name: 'trout',
      price: '$12',
      category: 'fish',
    },
    {
      name: 'guava',
      price: '$3',
      category: 'fruits',
    },
  ];
  const render = async (req, res) => {
    res.render('items/index.ejs', { items });
  };

  return {
    render,
  };
}
