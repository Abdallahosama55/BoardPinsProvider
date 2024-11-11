import { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import { useLocation } from 'react-router-dom';

const useMixpanel = () => {
  const location = useLocation();

  useEffect(() => {
    mixpanel.track('Page View', {
      page: location.pathname,
    });
    // Optional: Log page view for debugging
    console.log(`Tracked page view: ${location.pathname}`);

    return () => {
      // Optional cleanup if needed
      console.log('Cleaning up Mixpanel tracking');
    };
  }, [location]);
};

export default useMixpanel;
