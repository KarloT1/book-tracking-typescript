import React from "react";
import { useState } from "react";

interface Props {
  handleChange: (value: string) => void
}

const SearchField = (props: Props) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
    props.handleChange(value)
  }

  return (
    <div className="search-field__wrapper">
      <input 
        type="text"
        onChange={handleChange}
        value={value}
        placeholder="Search by Author or Book name"
      />
    </div>
  )
}

export default SearchField