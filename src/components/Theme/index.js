import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';


const theme = createMuiTheme({
  palette: {
		primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ff4400',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contast with palette.primary.main
    },
		secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
	},
	typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Roboto',
			'"Helvetica Neue"',
			'-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
		].join(','),
		fontSize: 16,
		fontWeight: 400
	},
	root: {
    flexGrow: 1,
	},
	overrides: {
		MuiTableHead: {
			root: {

			}
		},
		MuiTableCell: {
			head: {
				fontWeight: 500,
				fontSize: '1.2rem'
			}
		},

		MuiSvgIcon: {
			root: {
				margin: '5px'
			}
		}
	}
});

export default theme;

export const ThemeAlternate = createMuiTheme({
	palette: {
		primary: {
			light: '#a255ff',
			main: '#651fff',
			dark: '0100ca'
		},
		secondary: {
			light: '#FF6E40',
			main: '#ff3d00',
			dark: 'c30000'
			// dark: will be calculated from palette.secondary.main,
		},
		error: {
			main: '#F44336',
		},
		contrastThreshold: 3,
		tonalOffset: 0.2,
	},

	typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Roboto',
			'"Helvetica Neue"',
			'-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
		].join(','),
		fontSize: 16,
		fontWeight: 400
	},
	root: {
    flexGrow: 1,
	},
	overrides: {
		MuiTableHead: {
			root: {

			}
		},
		MuiTableCell: {
			head: {
				fontWeight: 500,
				fontSize: '1.2rem'
			}
		},
		MuiInput: {
			root: {
				lineHeight: '1.3875em',
			}
		},
		MuiSvgIcon: {
			root: {
				margin: '5px'
			}
		},
		MuiChip: {
			root: {
				backgroundColor: "#651fff",
				marginRight: '10px'
			},
			label: {
				color: 'white'
			},
			deleteIcon: {
				fill: 'white',
				'&:hover': {
					fill: 'red'
				}
			}
		},
		MuiDrawer: {
			paperAnchorRight: {
				width: '640px',
			}
		},
		MuiList: {
			padding: {
				paddingBottom: '0'
			}
		}
	}
});

export const FormTheme = createMuiTheme({
	palette: {
		primary: {
			main: '#00e676',
			contrastText: 'white'
		},
		secondary: {
			main: '#ff1744',
			contrastText: 'white',
			// dark: will be calculated from palette.secondary.main,
		},
		error: {
			main: '#F44336',
			contrastText: 'white'
		},
		contrastThreshold: 3,
		tonalOffset: 0.2,
	},

	typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Roboto',
			'"Helvetica Neue"',
			'-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
		].join(','),
		fontSize: 16,
		fontWeight: 400
	},
	overrides: {
		MuiButton: {
			root: {
				color: 'white'
			},
		},
		MuiSvgIcon: {
			root: {
				fill: 'white'
			}
		},
	}
})