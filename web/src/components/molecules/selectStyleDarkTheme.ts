import { StylesConfig } from 'react-select';
import { OptionType } from '@/types/optionType';

export const genericSelectStyles: StylesConfig<OptionType, boolean> = {
  control: (base) => ({
    ...base,
    backgroundColor: '#262626',
    borderColor: '#777',
    color: '#DDDDDD',
    width: '100%',
    borderRadius: '4px',
    padding: '8px',
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#0044CC',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#0044CC' : '#333333',
    color: state.isSelected ? 'white' : '#DDDDDD',
    '&:hover': {
      backgroundColor: '#555555',
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#262626',
  }),
  multiValue: (base, state) => ({
    ...base,
    backgroundColor: '#333333',
    color: 'white',
  }),
  multiValueLabel: (base, state) => ({
    ...base,
    color: '#DDDDDD',
  }),
  multiValueRemove: (base, state) => ({
    ...base,
    ':hover': {
      backgroundColor: '#aa0505',
      color: 'white',
    },
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: '#DDDDDD',
  }),
};
