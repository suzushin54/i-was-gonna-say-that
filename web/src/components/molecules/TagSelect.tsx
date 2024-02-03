import React from 'react';
import Select, { ActionMeta, MultiValue, StylesConfig } from 'react-select';
import { Tag } from '@/types/tag';

interface TagSelectProps {
  registeredTags: Tag[];
  selectedTags: Tag[];
  setSelectedTags: (tags: Tag[]) => void;
}

const TagSelect: React.FC<TagSelectProps> = (
  {
    registeredTags,
    selectedTags,
    setSelectedTags,
  }
) => {

  const darkModeStyles: StylesConfig<OptionType, boolean> = {
    control: (base, state) => ({
      ...base,
      backgroundColor: '#262626',
      borderColor: state.isFocused ? '#0044CC' : '#777', // フォーカス時と非フォーカス時の境界色
      color: '#DDDDDD',
      width: '100%',
      borderRadius: '4px',
      padding: '2px',
      boxShadow: state.isFocused ? '0 0 0 1px #0044CC' : 'none',
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

  const tagOptions = registeredTags.map(tag => ({
    value: tag.id.toString(),
    label: tag.tag,
  }));

  interface OptionType {
    value: string;
    label: string;
  }

  const handleSelectChange = (
    newValue: MultiValue<OptionType>,
    actionMeta: ActionMeta<OptionType>
  ) => {
    const newSelectedTags = newValue.map(option => ({
      id: parseInt(option.value, 10),
      tag: option.label,
    }));
    setSelectedTags(newSelectedTags);
  };

  // selectedTagsをSelectコンポーネントのvalue形式に変換
  const selectedTagOptions = selectedTags.map(tag => ({
    value: tag.id.toString(),
    label: tag.tag,
  }));

  return (
    <Select
      styles={darkModeStyles}
      components={{
        IndicatorSeparator: () => null,
      }}
      isMulti
      options={tagOptions}
      value={selectedTagOptions}
      onChange={handleSelectChange}
    />
  );
};

export default TagSelect;
