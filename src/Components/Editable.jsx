import React, { useState, useEffect } from 'react';
import './Editable.css';

const EditableText = ({
  value,
  onChange,
  as = 'p',
  className = '',
  fieldKey,
  isEditing,
  onEdit,
  onCancelEdit
}) => {
  const [tempValue, setTempValue] = useState(value);
  const Tag = as;

  useEffect(() => {
    // Reset tempValue when field becomes editable
    if (isEditing) setTempValue(value);
  }, [isEditing, value]);

  const handleConfirm = () => {
    onChange(tempValue);
    onCancelEdit(); // end editing mode
  };

  const handleCancel = () => {
    setTempValue(value);
    onCancelEdit(); // cancel editing
  };

  return isEditing ? (
    <div className="editable-wrapper no-print">
      <input
        type="text"
        value={tempValue}
        onChange={(e) => setTempValue(e.target.value)}
        className="editable-input"
      />
      <button onClick={handleConfirm} className="btn-confirm">✔</button>
      <button onClick={handleCancel} className="btn-cancel">✖</button>
    </div>
  ) : (
    <Tag className={className} onClick={() => onEdit(fieldKey)}>
      {value}
    </Tag>
  );
};

export default EditableText;
