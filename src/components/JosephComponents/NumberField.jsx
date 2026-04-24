import * as React from 'react';
import PropTypes from 'prop-types';
import { NumberField as BaseNumberField } from '@base-ui/react/number-field';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function SSRInitialFilled() {
  return null;
}

SSRInitialFilled.muiName = 'Input';

function NumberField({
  id: idProp,
  label,
  error = false,
  helperText = ' ',
  size = 'medium',
  ...other
}) {
  let id = React.useId();

  if (idProp) {
    id = idProp;
  }

  return (
    <BaseNumberField.Root
      {...other}
      render={(props, state) => (
        <FormControl
          size={size}
          ref={props.ref}
          disabled={state.disabled}
          required={state.required}
          error={error}
          variant="outlined"
          fullWidth
        >
          {props.children}
        </FormControl>
      )}
    >
      <SSRInitialFilled />
      <InputLabel htmlFor={id}>{label}</InputLabel>

      <BaseNumberField.Input
        id={id}
        render={(props, state) => (
          <OutlinedInput
            label={label}
            inputRef={props.ref}
            value={state.inputValue}
            onBlur={props.onBlur}
            onChange={props.onChange}
            onKeyUp={props.onKeyUp}
            onKeyDown={props.onKeyDown}
            onFocus={props.onFocus}
            slotProps={{
              input: props,
            }}
            endAdornment={
              <InputAdornment
                position="end"
                sx={{
                  flexDirection: 'column',
                  maxHeight: 'unset',
                  alignSelf: 'stretch',
                  borderLeft: '1px solid',
                  borderColor: 'divider',
                  ml: 0,
                  '& button': {
                    py: 0,
                    flex: 1,
                    borderRadius: 0.5,
                  },
                }}
              >
                <BaseNumberField.Increment
                  render={<IconButton size={size} aria-label="Increase" />}
                >
                  <KeyboardArrowUpIcon
                    fontSize={size}
                    sx={{ transform: 'translateY(2px)' }}
                  />
                </BaseNumberField.Increment>

                <BaseNumberField.Decrement
                  render={<IconButton size={size} aria-label="Decrease" />}
                >
                  <KeyboardArrowDownIcon
                    fontSize={size}
                    sx={{ transform: 'translateY(-2px)' }}
                  />
                </BaseNumberField.Decrement>
              </InputAdornment>
            }
            sx={{ pr: 0 }}
          />
        )}
      />

      <FormHelperText sx={{ ml: 0, '&:empty': { mt: 0 } }}>
        {helperText}
      </FormHelperText>
    </BaseNumberField.Root>
  );
}

NumberField.propTypes = {
  error: PropTypes.bool,
  helperText: PropTypes.node,
  id: PropTypes.string,
  label: PropTypes.node,
  size: PropTypes.oneOf(['medium', 'small']),
};

export default NumberField;
