import { createTheme } from '@mui/material';

import borders from './base/borders';
import boxShadows from './base/boxShadows';
import breakpoints from './base/breakpoints';
import colors from './base/colors';
import globals from './base/globals';
import typography from './base/typography';
import appBar from './components/appBar';
import avatar from './components/avatar';
import button from './components/button';
import container from './components/container';
import input from './components/form/input';
import icon from './components/icon';
import list from './components/list';
import listItem from './components/list/listItem';
import listItemText from './components/list/listItemText';
import stepper from './components/stepper';
import stepConnector from './components/stepper/stepConnector';
import stepIcon from './components/stepper/stepIcon';
import stepLabel from './components/stepper/stepLabel';
import tabs from './components/tabs';
import tab from './components/tabs/tab';
import pxToRem from './functions/pxToRem';
import linearGradient from './functions/linearGradient';
import rgba from './functions/rgba';
import hexToRgb from './functions/hexToRgb';
import boxShadow from './functions/boxShadow';
import formControlLabel from './components/form/formControlLabel';
import divider from './components/divider';
import card from './components/card';
import cardMedia from './components/card/cardMedia';
import cardContent from './components/card/cardContent';
import step from './components/stepper/step';
import menu from './components/menu';
import menuItem from './components/menu/menuItem';
import paper from './components/paper';
import listItemIcon from './components/list/listItemIcon';
import cardHeader from './components/card/cardHeader';
import textField from './components/form/textField';
import inputBase from './components/form/inputBase';
import formLabel from './components/form/formLabel';
import inputLabel from './components/form/inputLabel';
import formHelperText from './components/form/formHelperText';
import iconButton from './components/iconButton';
import tabPanel from './components/tabs/tabPanel';
import inputOutlined from './components/form/inputOutlined';
import modal from './components/modal';
import drawer from './components/drawer';

const gene20DarkTheme = createTheme({
  breakpoints: { ...breakpoints },
  typography: { ...typography },
  palette: { ...colors },
  boxShadows: { ...boxShadows },
  borders: { ...borders },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
        ...container,
      },
    },
    MuiModal: { ...modal },
    MuiIconButton: { ...iconButton },
    MuiPaper: { ...paper },
    MuiList: { ...list },
    MuiListItem: { ...listItem },
    MuiFormHelperText: { ...formHelperText },
    MuiListItemText: { ...listItemText },
    MuiListItemIcon: { ...listItemIcon },
    MuiOutlinedInput: { ...inputOutlined },
    MuiInputLabel:{...inputLabel},
    MuiTabs: { ...tabs },
    MuiTab: { ...tab },
    MuiTabPanel: { ...tabPanel },
    MuiStepper: { ...stepper },
    MuiCard: { ...card },
    MuiCardMedia: { ...cardMedia },
    MuiCardHeader: { ...cardHeader },
    MuiTextField: { ...textField },
    MuiInputBase: { ...inputBase },
    MuiCardContent: { ...cardContent },
    MuiStep: { ...step },
    MuiStepConnector: { ...stepConnector },
    MuiStepLabel: { ...stepLabel },
    MuiStepIcon: { ...stepIcon },
    MuiButton: { ...button },
    MuiAppBar: { ...appBar },
    MuiAvatar: { ...avatar },
    MuiIcon: { ...icon },
    MuiFormLabel: { ...formLabel },
    MuiFormControlLabel: { ...formControlLabel },
    MuiDivider: { ...divider },
    MuiMenu: { ...menu },
    MuiMenuItem: { ...menuItem },
    MuiDrawer: { ...drawer },
  },
});
export default gene20DarkTheme;
