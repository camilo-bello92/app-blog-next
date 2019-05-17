import Drawer from '@material-ui/core/Drawer';
import classNames from 'classnames';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems, secondaryListItems } from '../../components/ListItems';

const Sidebar = ({classes, state, handleDrawerClose}) => {
    return (   
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !state.open && classes.drawerPaperClose),
          }}
          open={state.open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>
    );
}

export default Sidebar;