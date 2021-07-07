import { useState, useEffect } from 'react';
import { LoadingStatus } from '@amityco/js-sdk';

const noop = () => {
  // eslint-disable-next-line no-console
  if (process?.env?.NODE_ENV === 'development') console.warn('[useLiveCollection] noop hit');
};

const useLiveCollection = (
  createLiveCollection,
  dependencies = [],
  resolver = () => dependencies.some(dep => !dep),
) => {
  const [data, setData] = useState([]);

  const [pagination, setPagination] = useState({
    hasMore: false,
    loadMore: noop,
  });

  useEffect(() => {
    if (resolver()) return;

    try {
      const liveCollection = createLiveCollection();

      liveCollection.on('dataError', err => {
        // eslint-disable-next-line no-console
        console.log('ERROR WITH LIVE COLLECTION', err);
      });
      // data
      liveCollection.on('dataUpdated', newData => {
        const { hasMore } = liveCollection;

        setPagination({
          hasMore,
          loadMore: hasMore ? () => liveCollection.nextPage() : noop,
        });
        setData(newData);
      });

      liveCollection.models && setData(liveCollection.models);

      // pagination
      liveCollection.on('loadingStatusChanged', ({ newValue }) => {
        const hasMore = newValue === LoadingStatus.Loaded && liveCollection.hasMore;

        setPagination({
          hasMore,
          loadMore: hasMore ? () => liveCollection.nextPage() : noop,
        });
      });
      return () => liveCollection.dispose();
    } catch (err) {
      if (process.env.NODE_ENV === 'development')
        // eslint-disable-next-line no-console
        console.warn('[useLiveCollection] error thrown', err);
    }
    // eslint-disable-next-line
  }, [...dependencies]);

  return [data, pagination.hasMore, pagination.loadMore];
};

export default useLiveCollection;
