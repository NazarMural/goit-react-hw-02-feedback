import React from 'react';
import PropTypes from 'prop-types';
import { Button, ListButton } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ListButton>
      {options.map(item => {
        return (
          <li>
            <Button
              key={item}
              onClick={() => {
                onLeaveFeedback(item);
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Button>
          </li>
        );
      })}
    </ListButton>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
