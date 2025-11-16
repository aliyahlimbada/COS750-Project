import React, { useState } from 'react';

// Define the data structure for a topping
type ToppingItem = {
  id: number;
  name: string;
  price: number;
  type: 'Leaf' | 'Composite';
  children?: ToppingItem[];
};

const toolboxItems: ToppingItem[] = [
  { id: 1, name: 'Cheese', price: 15.00, type: 'Leaf' },
  { id: 2, name: 'Pepperoni', price: 20.00, type: 'Leaf' },
  { id: 3, name: 'Mushrooms', price: 12.00, type: 'Leaf' },
  { id: 4, name: 'Green Peppers', price: 10.00, type: 'Leaf' },
  { id: 5, name: 'Onions', price: 8.00, type: 'Leaf' },
  { id: 6, name: 'Beef Sausage', price: 25.00, type: 'Leaf' },
  { id: 7, name: 'Salami', price: 22.00, type: 'Leaf' },
  { id: 8, name: 'Feta Chesse', price: 18.00, type: 'Leaf' },
  { id: 9, name: 'Olives', price: 12.00, type: 'Leaf' },
  { 
    id: 10, 
    name: 'Veggie Delight', 
    price: 60.00,
    type: 'Composite',
    children: [
      { id: 4, name: 'Green Peppers', price: 10.00, type: 'Leaf' },
      { id: 5, name: 'Onions', price: 8.00, type: 'Leaf' },
      { id: 9, name: 'Olives', price: 12.00, type: 'Leaf' },
    ]
  },
  { 
    id: 11, 
    name: 'Meat Lovers', 
    price: 80.00, 
    type: 'Composite',
    children: [
      { id: 2, name: 'Pepperoni', price: 20.00, type: 'Leaf' },
      { id: 6, name: 'Beef Sausage', price: 25.00, type: 'Leaf' },
      { id: 7, name: 'Salami', price: 22.00, type: 'Leaf' },
    ]
  },
];

// A recursive component to display a topping and its children
const ToppingDisplay: React.FC<{ topping: ToppingItem }> = ({ topping }) => (
  <div className={`topping-display ${topping.type.toLowerCase()}`}>
    <span className="topping-name">{topping.name}</span>
    <span className="topping-price">R{topping.price.toFixed(2)}</span>
    {topping.children && (
      <div className="topping-children">
        {topping.children.map(child => <ToppingDisplay key={child.id} topping={child} />)}
      </div>
    )}
  </div>
);

export const InteractivePizzaBuilder = () => {
  const [toppingsOnPizza, setToppingsOnPizza] = useState<ToppingItem[]>([]);
  const [isOver, setIsOver] = useState(false);

  const handleDragStart = (e: React.DragEvent, topping: ToppingItem) => {
    e.dataTransfer.setData('application/json', JSON.stringify(topping));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    setIsOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const toppingData = JSON.parse(e.dataTransfer.getData('application/json'));
    setToppingsOnPizza(prev => [...prev, toppingData]);
    setIsOver(false);
  };

   const handleReset = () => {
    setToppingsOnPizza([]);
  };

  return (
    <div className="pizza-builder-container">
      {/* Toolbox of available toppings */}
      <div className="toolbox">
        <h4>Romeo's Pizza Menu</h4>
        {toolboxItems.map(item => (
          <div 
            key={item.id} 
            className="topping-item" 
            draggable 
            onDragStart={(e) => handleDragStart(e, item)}
          >
            {item.name} ({item.type})
          </div>
        ))}
      </div>

      {/* The Pizza canvas where items are dropped */}
      <div 
        className={`pizza-canvas ${isOver ? 'over' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="canvas-header">
          <h4>My Pizza</h4>
          <span>Drag toppings from the menu here</span>
          <button className="reset-pizza-btn" onClick={handleReset}>
            Reset Pizza
          </button>
        </div>
        
        <div className="toppings-area">
          {toppingsOnPizza.length > 0 
            ? toppingsOnPizza.map((topping, index) => <ToppingDisplay key={index} topping={topping} />)
            : <p className="empty-notice">Your pizza is empty!</p>
          }
        </div>
      </div>
    </div>
  );
};