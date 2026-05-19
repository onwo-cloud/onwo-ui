export interface Theme {
  // --- Background & Border ---
  bgColor: string;
  borderColor: string;

  // --- Curve Stroke (White on Black) ---
  curveColorPrimary: string;
  curveColorSecondary: string;
  curveWidthPrimary: number;
  curveWidthSecondary: number;

  // --- Anchor Point ---
  pointColor: string;
  pointHoverColor: string;
  pointRadius: number;

  // --- Handles (Red) ---
  handleColor: string;
  handleHoverColor: string;
  handleSize: number;

  // --- Handle Lines (White on Red) ---
  handleLineColorPrimary: string;
  handleLineColorSecondary: string;
  handleLineWidthPrimary: number;
  handleLineWidthSecondary: number;

  // --- Focus Indication ---
  focusColor: string;
  focusStrokeWidth: number;
}

export const defaultTheme: Theme = {
  // --- Background & Border ---
  bgColor: 'transparent',
  borderColor: '#ccc',

  // --- Curve Stroke (White on Black) ---
  curveColorPrimary: '#ffffff',
  curveColorSecondary: '#000000',
  curveWidthPrimary: 2,
  curveWidthSecondary: 4,

  // --- Anchor Point ---
  pointColor: '#111',
  pointHoverColor: 'red',
  pointRadius: 6,

  // --- Handles (Red) ---
  handleColor: 'red',
  handleHoverColor: '#d11f15',
  handleSize: 8,

  // --- Handle Lines (White on Red) ---
  handleLineColorPrimary: '#ffffff',
  handleLineColorSecondary: 'red',
  handleLineWidthPrimary: 1,
  handleLineWidthSecondary: 3,

  // --- Focus Indication ---
  focusColor: 'red',
  focusStrokeWidth: 2,
};
