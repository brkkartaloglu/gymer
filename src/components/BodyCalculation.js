import bmipic from "../assets/images/bmi.jpg";
import macrospic from "../assets/images/macros.jpg";
import f1 from "../assets/fat_images/row-1-column-1.jpg";
import f2 from "../assets/fat_images/row-1-column-2.jpg";
import f3 from "../assets/fat_images/row-1-column-3.jpg";
import f4 from "../assets/fat_images/row-2-column-1.jpg";
import f5 from "../assets/fat_images/row-2-column-2.jpg";
import f6 from "../assets/fat_images/row-2-column-3.jpg";
import f7 from "../assets/fat_images/row-3-column-1.jpg";
import f8 from "../assets/fat_images/row-3-column-2.jpg";
import f9 from "../assets/fat_images/row-3-column-3.jpg";
//REACT_APP_RAPID_API_KEY=0ea3c567a4msh65dbb7cd06ab077p113cbejsn9f067d336aaf
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { bmioptions, fetchData } from "../utils/fetchData";
import { Stack } from "@mui/system";

const BodyCalculation = () => {
  const [bmi, setBmi] = useState("");
  const [macros, setMacros] = useState("");
  const [inputs, setInputs] = useState({
    weight: "",
    height: "",
    age: "",
    aim: "",
    fat: "",
  });

  const onInputChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const fetchCalculationData = async () => {
    const bmiData = await fetchData(
      `https://fitness-calculator.p.rapidapi.com/bmi?age=${inputs.age}&weight=${inputs.weight}&height=${inputs.height}`,
      bmioptions
    );
    const macrosData = await fetchData(
      `https://fitness-calculator.p.rapidapi.com/macrocalculator?age=${inputs.age}&&gender=male&height=${inputs.height}&weight=${inputs.weight}&activitylevel=4&goal=${inputs.aim}`,
      bmioptions
    );
    console.log(macrosData.data);
    setMacros(macrosData.data.balanced);
    setBmi(bmiData.data);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    fetchCalculationData();
  };

  const handleClick = (f) => {
    console.log(inputs);
    setInputs({ ...inputs, ["fat"]: f });
    makeManifest();
  };

  const makeManifest = () => {};
  useEffect(() => {}, [bmi.fat]);
  return (
    <Box
      display="inline-block"
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Weight (kg)"
        placeholder="80"
        variant="outlined"
        name="weight"
        value={inputs.weight}
        onChange={onInputChange}
        required
      />
      <TextField
        id="outlined-basic"
        label="Height (cm)"
        variant="outlined"
        name="height"
        placeholder="183"
        value={inputs.height}
        onChange={onInputChange}
        required
      />
      <TextField
        id="outlined-basic"
        label="Age"
        variant="outlined"
        placeholder="28"
        name="age"
        value={inputs.age}
        onChange={onInputChange}
        required
      />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Aim</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={inputs.aim}
          label="Aim"
          name="aim"
          onChange={onInputChange}
          required
        >
          <MenuItem value={"weightlose"}>Weight/fat loss</MenuItem>
          <MenuItem value={"weightgain"}>Weight/muscle gain</MenuItem>
          {/* <MenuItem value={"maintain"}>maintain weight</MenuItem>
          <MenuItem value={"mildlose"}>Mild weight/fat loss</MenuItem>
          <MenuItem value={"extremelose"}>Extreme weight loss</MenuItem>
          <MenuItem value={"mildgain"}>Mild weight gain</MenuItem>
          <MenuItem value={"extremegain"}>Extreme weight/muscle gain</MenuItem> */}
        </Select>
      </FormControl>
      <Button variant="contained" onClick={onFormSubmit}>
        Calculate
      </Button>
      {bmi && (
        <>
          <Stack direction="row">
            <Card
              sx={{
                ml: "21px",
                minWidth: 300,
              }}
            >
              <CardMedia
                component="img"
                alt="bmichart"
                height="100"
                src={bmipic}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {bmi.health}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Your BMI is <b>{bmi.bmi}</b>
                  <br></br>
                  Healty BMI range is {bmi.healthy_bmi_range}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>

            <Card
              sx={{
                ml: "21px",
                minWidth: 300,
              }}
            >
              <CardMedia
                component="img"
                alt="bmichart"
                height="100"
                src={macrospic}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Your Macros Information
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Get <b>{parseInt(macros.protein)}</b> grams of protein
                  <br></br>
                  Get <b>{parseInt(macros.fat)}</b> grams of fat
                  <br></br>
                  Get <b>{parseInt(macros.carbs)}</b> grams of carbs
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Stack>

          <Typography gutterBottom variant="h5" component="div">
            Now select how your body fat looks like from below pics:
          </Typography>
          {/* <img alt="f1" src={f1} onClick={() => handleClick("4-5%")}></img>
          <img alt="f1" src={f2} onClick={() => handleClick("6-7%")}></img>
          <img alt="f1" src={f3} onClick={() => handleClick("8-10%")}></img> */}
          <br></br>
          <img alt="f1" src={f4} onClick={() => handleClick("11-12%")}></img>
          <img alt="f1" src={f5} onClick={() => handleClick("13-15%")}></img>
          <img alt="f1" src={f6} onClick={() => handleClick("16-19%")}></img>
          <br></br>
          <img alt="f1" src={f7} onClick={() => handleClick("20-24%")}></img>
          <img alt="f1" src={f8} onClick={() => handleClick("25-30%")}></img>
          <img alt="f1" src={f9} onClick={() => handleClick("35-40%")}></img>
        </>
      )}
    </Box>
  );
};

export default BodyCalculation;
