import React from 'react';
import ReactDOM from 'react-dom';
import uuidv4 from 'uuid/v4';

import LayerIdentifierContext from './LayerIdentifierContext';
import LayerManagerContext from './LayerManagerContext';

/**
 * Creates an element with appropriate styling to be used as the destination
 * for portaled Layer content.
 * @returns An HTMLElement instance
 */
function createPortalElement() {
  const newPortalElement = document.createElement('div');
  newPortalElement.style.position = 'absolute';
  newPortalElement.style.height = '100%';
  newPortalElement.style.width = '100%';
  newPortalElement.style['z-index'] = '0';
  return newPortalElement;
}

/**
 * A custom hook used to present layer content through an ancestor LayerManager.
 * @param {Object} portalData The layer configuration data
 * @param {String} portalData.layerType The type of layer to present, indicating
 * where in the stacking hierarchy the layer should be displayed. This value is
 * cached upon initial execution, which subsequent changes to it ignored.
 * @returns An Object containing a LayerPortal component and the generated
 * identifier for the layer.
 */
const useLayerPortal = ({
  layerType,
}) => {
  const layerManager = React.useContext(LayerManagerContext);
  const parentLayerId = React.useContext(LayerIdentifierContext);
  const layerIdRef = React.useRef(uuidv4());
  const layerTypeRef = React.useRef(layerType);
  const portalElementRef = React.useRef(createPortalElement());
  const unregisterLayerRef = React.useRef();

  if (!layerManager) {
    throw new Error(`[terra-application] Layer ${layerTypeRef.current} cannot be rendered outside of a LayerManager.`);
  }

  // This hook registers the layer with the LayerManager. The dependency values
  // should be static; execution should happen a single time.
  React.useLayoutEffect(() => {
    unregisterLayerRef.current = layerManager.registerLayer({
      portalElement: portalElementRef.current,
      layerId: layerIdRef.current,
      layerType: layerTypeRef.current,
      parentLayerId,
    });
  }, [layerManager, parentLayerId]);

  // We unregister with the LayerManager when the consuming component unmounts.
  React.useLayoutEffect(() => () => {
    if (unregisterLayerRef.current) {
      unregisterLayerRef.current();
    }
  }, []);

  // We create a dynamic component that will portal the provided children to the
  // generated element. The LayerManager will ensure that this element is
  // rendered to the DOM based on the current registration state.
  const layerPortalComponentRef = React.useRef(({ children }) => (
    <LayerIdentifierContext.Provider value={layerIdRef.current}>
      {ReactDOM.createPortal(children, portalElementRef.current)}
    </LayerIdentifierContext.Provider>
  ));

  return {
    layerId: layerIdRef.current,
    LayerPortal: layerPortalComponentRef.current,
  };
};

export default useLayerPortal;
