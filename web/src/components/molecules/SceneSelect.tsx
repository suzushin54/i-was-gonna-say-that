import React from 'react';
import Select, {ActionMeta, SingleValue} from 'react-select';
import {genericSelectStyles} from './selectStyleDarkTheme'
import {Scene} from '@/types/scene';

interface SceneSelectProps {
  options: Scene[];
  selectedOption: Scene | undefined;
  setSelectedOption: (option: Scene) => void;
}

const SceneSelect: React.FC<SceneSelectProps> = (
  {
    options,
    selectedOption,
    setSelectedOption,
  }) => {

  const convertToSelectOption = (scene: Scene) => ({
    value: scene.id.toString(),
    label: scene.name,
  });

  const selectedOptionForSelect = selectedOption ? convertToSelectOption(selectedOption) : null;

  const handleSelectChange = (
    newValue: SingleValue<{ value: string; label: string }>,
    actionMeta: ActionMeta<{ value: string; label: string }>
  ) => {
    const newSelectedScene = options.find(scene => scene.id.toString() === newValue?.value);
    if (newSelectedScene) setSelectedOption(newSelectedScene);
  };

  const optionsForSelect = options.map(convertToSelectOption);

  return (
    <Select
      styles={genericSelectStyles}
      isMulti={false}
      components={{
        IndicatorSeparator: () => null,
      }}
      options={optionsForSelect}
      value={selectedOptionForSelect}
      onChange={handleSelectChange}
    />
  );
}

export default SceneSelect;
