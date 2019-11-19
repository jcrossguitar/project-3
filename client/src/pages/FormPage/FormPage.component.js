import React from 'react';
import { FormPageProps } from './FormPage.propTypes'
import { ReactRouterDetails } from '../../components/ReactRouterDetails/ReactRouterDetails.component';
import styles from './FormPage.styles.scss';

export class FormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('componentDidMount()', this.props);
  }

  componentDidUpdate(prevProps, prevState, prevSnapshot) {
    console.log('componentDidUpdate(prevProps, prevState, prevSnapshot)', prevProps, prevState, prevSnapshot);
  }

  render() {
    return (
      <div>

    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}


    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}


    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}

      </div>
    );
  }
}

FormPage.propTypes = FormPageProps.propTypes;
FormPage.defaultProps = FormPageProps.defaultProps;
