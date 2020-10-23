import React from 'react';
import Panel from '../../../../workspace/Panel';
import MockContent from './MockContent';

const Page4 = () => (
  <Panel
    toolBar={<p style={{ backgroundColor: 'lightgreen', padding: '0.5rem', margin: '0' }}>Page 4 Toolbar</p>}
  >
    <MockContent title="Page 4" initialCount={0} />
  </Panel>
);

Page4.titleKey = 'derp';

export default Page4;
