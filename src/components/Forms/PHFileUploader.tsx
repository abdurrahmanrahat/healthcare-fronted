import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Input } from "@mui/material";
import Button from "@mui/material/Button";
import { SxProps } from "@mui/material/styles";
import { Controller, useFormContext } from "react-hook-form";

type TFileProps = {
  name: string;
  label?: string;
  sx?: SxProps;
};

export default function PHFileUploader({ name, label, sx }: TFileProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ...field } }) => {
        return (
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            sx={{ ...sx }}
          >
            {label || "Upload File"}
            <Input
              {...field}
              type={name}
              value={value?.filename}
              onChange={(e) =>
                onChange((e?.target as HTMLInputElement).files?.[0])
              }
              style={{ display: "none" }}
            />
          </Button>
        );
      }}
    />
  );
}
