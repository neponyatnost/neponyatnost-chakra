import { ChangeEvent, FC, useState } from 'react'

export interface SortingOption {
  value: string
  label: string
}

interface Props {
  options: SortingOption[]
  defaultOption: string
  onSortChange: (selectedValue: string) => void
}

const DropdownMenu: FC<Props> = ({ options, defaultOption, onSortChange }) => {
  const [selectedValue, setSelectedValue] = useState(defaultOption)

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value
    setSelectedValue(selectedValue)
    onSortChange(selectedValue)
  }

  return (
    <div>
      <label htmlFor='sortingOptions'>Sort By:</label>
      <select
        id='sortingOptions'
        value={selectedValue}
        onChange={handleOptionChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default DropdownMenu
