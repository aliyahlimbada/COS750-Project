import React, { useState } from 'react';

// Define the types for the slots and roles
type DiagramRole = 'Component' | 'Leaf' | 'Composite';
type DiagramSlots = {
  component: DiagramRole | null;
  leaf: DiagramRole | null;
  composite: DiagramRole | null;
};

const INITIAL_ROLES: DiagramRole[] = ['Component', 'Leaf', 'Composite'];

export const ClassDiagramBuilder = () => {
  const [slots, setSlots] = useState<DiagramSlots>({ component: null, leaf: null, composite: null });
  const [toolboxRoles, setToolboxRoles] = useState<DiagramRole[]>(INITIAL_ROLES);
  const [draggedRole, setDraggedRole] = useState<DiagramRole | null>(null);

  const handleDragStart = (e: React.DragEvent, role: DiagramRole) => {
    setDraggedRole(role);
    e.dataTransfer.setData('text/plain', role);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(); // Necessary to allow dropping
  };

  const handleDrop = (e: React.DragEvent, slotName: keyof DiagramSlots) => {
    e.preventDefault();
    if (draggedRole && !slots[slotName]) { // Only allow dropping if the slot is empty
      // Place the role in the slot
      setSlots(prev => ({ ...prev, [slotName]: draggedRole }));
      // Remove the role from the toolbox
      setToolboxRoles(prev => prev.filter(r => r !== draggedRole));
    }
    setDraggedRole(null);
  };

  const handleReset = () => {
    setSlots({ component: null, leaf: null, composite: null });
    setToolboxRoles(INITIAL_ROLES);
  };

  return (
    <div className="class-diagram-builder">
      <div className="diagram-area">
        {/* Component Slot */}
        <div 
          className={`uml-box component-slot ${slots.component ? 'filled' : ''}`}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, 'component')}
        >
          {slots.component ? <strong>{slots.component}</strong> : <span>Drop Role Here</span>}
          <div className="class-name">IPizzaComponent</div>
        </div>

        {/* Arrow Connector */}
        <div className="uml-arrows"></div>

        {/* Leaf & Composite Slots */}
        <div className="leaves-area">
          <div 
            className={`uml-box leaf-slot ${slots.leaf ? 'filled' : ''}`}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'leaf')}
          >
            {slots.leaf ? <strong>{slots.leaf}</strong> : <span>Drop Role Here</span>}
            <div className="class-name">Topping</div>
          </div>
          {/* <div 
            className={`uml-box composite-slot ${slots.composite ? 'filled' : ''}`}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'composite')}
          >
            {slots.composite ? <strong>{slots.composite}</strong> : <span>Drop Role Here</span>}
            <div className="class-name">ComboTopping</div>
          </div> */}
        </div>
      </div>

          <div className="composite-wrapper-builder">
            <div 
              className={`uml-box composite-slot ${slots.composite ? 'filled' : ''}`}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, 'composite')}
            >
              {slots.composite ? <strong>{slots.composite}</strong> : <span>Drop Role Here</span>}
              <div className="class-name">ComboTopping</div>
            </div>
            
            <svg className="aggregation-line-builder" width="150" height="120">
              <path d="M 5 55 L 120 55 L 120 10" stroke="#555" strokeWidth="2" fill="none" />
              <polygon points="5,55 10,50 15,55 10,60" stroke="#555" strokeWidth="2" fill="white" />
            </svg>
            <span className="aggregation-label-builder">children</span>
          </div>

      <div className="uml-toolbox">
        <h4>Pattern Roles</h4>
        {toolboxRoles.map(role => (
          <div 
            key={role}
            className="role-pill"
            draggable
            onDragStart={(e) => handleDragStart(e, role)}
          >
            {role}
          </div>
        ))}
        <button onClick={handleReset} className="reset-btn">Reset</button>
      </div>
    </div>
  );
};