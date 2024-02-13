import * as React from "react";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";

export default function PositionedSnackbar({
  showToast,
  vertical,
  horizontal,
  setShowToast,
}) {
  return (
    <Box sx={{ width: 500 }}>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={showToast.show}
        ContentProps={{ sx: { background: showToast.color } }}
        autoHideDuration={5000}
        onClose={() => setShowToast(false)}
        message={showToast.message}
        key={vertical + horizontal}
      />
    </Box>
  );
}
