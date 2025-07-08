import React from 'react';

interface ActionBarProps {
  onSave?: () => void;
  onCancel?: () => void;
}

export const ActionBar: React.FC<ActionBarProps> = ({ onSave, onCancel }) => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '16px',
        padding: '16px',
        backgroundColor: '#f5f5f5',
        borderTop: '1px solid #e0e0e0',
        boxSizing: 'border-box'
      }}
    >
      <button
        onClick={onSave}
        style={{
          backgroundColor: '#1976d2',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '8px 16px',
          fontSize: '14px',
          fontWeight: '500',
          textTransform: 'uppercase',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
          minWidth: '64px',
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
        }}
        onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1565c0'}
        onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1976d2'}
      >
        Save
      </button>
      
      <button
        onClick={onCancel}
        style={{
          backgroundColor: 'transparent',
          color: '#1976d2',
          border: '1px solid #1976d2',
          borderRadius: '4px',
          padding: '8px 16px',
          fontSize: '14px',
          fontWeight: '500',
          textTransform: 'uppercase',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease, border-color 0.3s ease',
          minWidth: '64px',
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
        }}
        onMouseEnter={(e) => {
          const target = e.target as HTMLButtonElement;
          target.style.backgroundColor = 'rgba(25, 118, 210, 0.04)';
          target.style.borderColor = '#1565c0';
        }}
        onMouseLeave={(e) => {
          const target = e.target as HTMLButtonElement;
          target.style.backgroundColor = 'transparent';
          target.style.borderColor = '#1976d2';
        }}
      >
        Cancel
      </button>
    </div>
  );
};

// Example usage
export default function App() {
  const handleSave = () => {
    alert('Save clicked');
  };

  const handleCancel = () => {
    alert('Cancel clicked');
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, padding: '20px', fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>
        <h1 style={{ color: '#212121', marginBottom: '16px' }}>Your Content Here</h1>
        <p style={{ color: '#757575', lineHeight: '1.5' }}>
          This is where your main content would go. The action bar below stays at the bottom 
          with the Save (contained) and Cancel (outlined) buttons centered.
        </p>
      </div>
      
      <ActionBar onSave={handleSave} onCancel={handleCancel} />
    </div>
  );
}
 