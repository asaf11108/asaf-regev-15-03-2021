import React, { useEffect } from 'react';
import './Home.scss';
import { useForm, NestedValue } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Autocomplete from '@material-ui/lab/Autocomplete';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Select, MenuItem } from '@material-ui/core';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Option = {
  label: string;
  value: string;
};

const options = [
  { label: 'Chocolate', value: 'chocolate' },
  { label: 'S234trawberry1', value: 'strawberry1' },
  { label: 'Vanilla', value: 'vanilla' },
];

const schema = yup.object().shape({
  label: yup
    .string()
    .matches(/^[A-Za-z]+$/i, "Location should not contain numbers")
    .required("Location is a required field"),
  value: yup
    .string()
});

const Home: React.FC = () => {
  const { register, handleSubmit, watch, setValue, errors, reset } = useForm<Option>({
    defaultValues: options[0],
    mode: 'onBlur',
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    reset({ ...options[0] });
  }, [register])

  return (
    <form>
      <Autocomplete
        options={options}
        getOptionLabel={(option: Option) => option.label}
        onChange={(e, options) => {setValue('label', options?.label); setValue('value', options?.value)}}
        renderInput={(params) => (
          <TextField
            ref={register}
            name="label"
            placeholder="Search location"
            {...params}
            error={Boolean(errors?.label)}
            helperText={errors.label?.message}
          />
        )}
      />

    </form>
  );
};

export default Home;
