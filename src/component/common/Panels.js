import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

const ExpansionPanel = withStyles({
  root: {
    // border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    // backgroundColor: 'rgba(0, 0, 0, .03)',
    // borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    // minHeight: 56,
    margin: '2px 0',
    '&$expanded': {
    //   minHeight: 56,
    },
  },
  content: {
    margin: '2px 0',
    '&$expanded': {
      margin: '2px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

export default function CustomizedExpansionPanels() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary  >
        <img src={require('../../assets/img/benefits.jpg')} />  
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <ul style={{color:'#999999'}}>
              <li>     pH Balanced</li>
              <li>Soap Free Formula</li>
              <li>Suitable for all skin types</li>
              <li>Soothing and gentle on skin</li>

          </ul>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
        <img src={require('../../assets/img/ingre.jpg')} />  
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
         <div style={{color:'#999999'}} >  Natural Colloidal Oatmeal, Sodium PCA, Citric Acid, Glycerin</div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
        <img src={require('../../assets/img/directions.jpg')} />  
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
         <div style={{color:'#999999'}}  >Apply a sufficient amount onto wet skin and then gently massage covering entire face.
               Rinse ensuring cleanser has been cleared.</div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}