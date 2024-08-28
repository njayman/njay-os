import { Close } from "@mui/icons-material";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  PaperProps,
  Typography,
} from "@mui/material";
import { FC, PropsWithChildren, useMemo, useState } from "react";
import Draggable from "react-draggable";

interface Props extends PropsWithChildren {
  title: string;
  Icon: JSX.ElementType;
}

const Window: FC<Props> = ({ children, title, Icon }) => {
  const [open, setOpen] = useState(true);

  const appId = useMemo(() => title.toLowerCase().replace(/ /g, "-"), [title]);

  const handleClose = () => {
    setOpen(false);
  };
  function PaperComponent(props: PaperProps) {
    return (
      <Draggable
        handle={`#${appId}`}
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
    );
  }

  return (
    <Dialog open={open} PaperComponent={PaperComponent} aria-labelledby={appId}>
      <DialogTitle
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Icon />
        <Typography>{title}</Typography>
        <IconButton onClick={handleClose}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default Window;
