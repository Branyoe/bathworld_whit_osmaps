import { Rating, styled } from "@mui/material";

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: 'brown',
  },
  '& .MuiRating-iconHover': {
    color: 'brown',
  },
});


export const MyRating = ({size, disable, ratingValue, setRatingValue, setOpenRatingDialog }) => {
  
  
  const handleOnChange = (event, newValue) => {
    if(disable) return;
    setRatingValue(newValue);
    setOpenRatingDialog(true);
  }

  return (
    <StyledRating
      name="simple-controlled"
      size={size ? size : "large"}
      sx={{ gap: 1 }}
      icon={<i className="fa-solid fa-poop"></i>}
      emptyIcon={<i className="fa-solid fa-poop"></i>}
      value={ratingValue}
      onChange={(event, newValue) => handleOnChange(event, newValue)}
    />
  );
}