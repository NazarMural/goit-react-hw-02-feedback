import React from 'react';
import { ListButton } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ListButton>
      {options.map(item => {
        return (
          <li>
            <button
              key={item}
              onClick={() => {
                onLeaveFeedback(item);
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          </li>
        );
      })}
    </ListButton>
  );
};

export default FeedbackOptions;
