'use client';

import AppTheme from '@/shared-theme/AppTheme';
import CssBaseline from '@mui/material/CssBaseline';

import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from '@/shared-theme/customizations';

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

export default function MaterialUIWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppTheme themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      {children}
    </AppTheme>
  );
}