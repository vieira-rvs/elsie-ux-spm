import figma from "@figma/code-connect/react";

import { Button } from "./button";

figma.connect(Button, "https://www.figma.com/design/p8VuDaWZdK00UvMfSIGaEY/Componentes?node-id=1-222&t=ZtnUw4tNprKXJiWJ-11", {
  props: {
    label: figma.string("Label"),
    variant: figma.enum("Variant", {
      Primary: "primary",
      Secondary: "secondary",
      Ghost: "ghost",
    }),
    size: figma.enum("Size", {
      Small: "sm",
      Medium: "md",
      Large: "lg",
    }),
    disabled: figma.boolean("Disabled"),
    isLoading: figma.boolean("Loading"),
    fullWidth: figma.boolean("Full width"),
  },
  example: ({ label, variant, size, disabled, isLoading, fullWidth }) => (
    <Button
      variant={variant}
      size={size}
      disabled={disabled}
      isLoading={isLoading}
      fullWidth={fullWidth}
    >
      {label}
    </Button>
  ),
});

