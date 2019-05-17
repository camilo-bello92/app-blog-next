import TopBar from '../components/fragments/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';

const Base = ({children}) => {
  return (
    <div style={{display: 'flex'}}>
        <CssBaseline />   
        <TopBar></TopBar>  
        {children}
      </div>
  );
}

export default Base;