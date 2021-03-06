import { h } from 'preact';
import Maps from 'src/components/maps';
import mdl from 'material-design-lite/material';
import { Button, Icon } from 'preact-mdl';

const Home = (props) => {
  const styles = {
    container: {
      padding: '56px 0',
      minHeight: '100%',
      width: '100%'
    },
    img: {
      position: 'absolute',
      width: '200px',
      zIndex: 1
    },
    button: {
      position: 'fixed',
      bottom: '20px',
      right: '20px'
    }
  };
  return (
    <div style={styles.container}>
      <Maps picture={props.picture} />
      <Button
        onClick={props.openModalVideo}
        fab
        raised
        colored
        style={styles.button}
      >
        <Icon icon="add" />
      </Button>
    </div>
  );
};

export default Home;
