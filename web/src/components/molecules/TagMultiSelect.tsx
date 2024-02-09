import React from 'react';
import Select, {ActionMeta, MultiValue} from 'react-select';
import {genericSelectStyles} from './selectStyleDarkTheme';
import {OptionType} from "@/types/optionType";
import {Tag} from "@/types/tag";

interface TagMultiSelectProps {
  options: Tag[];
  selectedOptions: Tag[];
  setSelectedOptions: (options: Tag[]) => void;
}

const TagMultiSelect: React.FC<TagMultiSelectProps> = (
  {
    options,
    selectedOptions,
    setSelectedOptions,
  }) => {

  const convertToSelectOption = (tag: Tag): OptionType => ({
    value: tag.id.toString(),
    label: tag.tag,
  });

  const optionsForSelect = options.map(convertToSelectOption);
  const selectedOptionsForSelect = selectedOptions.map(convertToSelectOption);

  const handleSelectChange = (
    newValue: MultiValue<OptionType>,
    actionMeta: ActionMeta<OptionType>
  ) => {
    const newSelectedTags = newValue.map(option => {
      const tagId = parseInt(option.value, 10);
      return options.find(tag => tag.id === tagId)!;
    });

    setSelectedOptions(newSelectedTags);
  };

  return (
    <Select
      styles={genericSelectStyles}
      isMulti={true}
      components={{
        IndicatorSeparator: () => null,
      }}
      options={optionsForSelect}
      value={selectedOptionsForSelect}
      onChange={handleSelectChange}
      closeMenuOnSelect={false}
    />
  );
};

export default TagMultiSelect;
