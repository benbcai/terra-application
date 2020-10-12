import React from 'react';

import ApplicationStatusOverlay from '../application-status-overlay';
import ApplicationPage from './ApplicationPage';

const ErrorPage = ({
  title, error, onRequestClose,
}) => (
  <ApplicationPage title={title} onRequestClose={onRequestClose}>
    <ApplicationStatusOverlay
      variant="error"
      message={`${error.message.toString()}`}
    />
  </ApplicationPage>
);

class PageErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = { error: undefined, showDeferredErrorPage: false };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidUpdate() {
    if (this.state.error && !this.state.showDeferredErrorPage) {
      // The ErrorPage must be rendered after the immediate render due to the error being caught.
      // This gives the Page that threw the error the opportunity to unmount prior to presenting a new one.
      this.setState({ showDeferredErrorPage: true });
    }
  }

  render() {
    if (this.state.showDeferredErrorPage) {
      return <ErrorPage title={this.props.title} onRequestClose={this.props.onRequestClose} error={this.state.error} />;
    }

    if (this.state.error) {
      return null;
    }

    return this.props.children;
  }
}

const withPageSafeguards = (Component, options = {}) => {
  const PageWithSafeguards = (props) => (
    <PageErrorBoundary
      title={options.defaultTitleId}
      onRequestClose={props.onRequestClose}
    >
      <Component {...props} />
    </PageErrorBoundary>
  );

  return PageWithSafeguards;
};

export default withPageSafeguards;
