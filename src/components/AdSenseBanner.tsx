import React, { useEffect } from 'react';

interface AdSenseBannerProps {
  client?: string;
  slot?: string;
  format?: string;
  responsive?: string;
}

export const AdSenseBanner: React.FC<AdSenseBannerProps> = ({
  client = 'ca-pub-0000000000000000', // Replace with your Google AdSense Publisher ID
  slot = '1234567890',              // Replace with your Google AdSense Ad Slot ID
  format = 'auto',
  responsive = 'true'
}) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log('AdSense script loading fallback');
    }
  }, []);

  return (
    <div className="my-8 text-center overflow-hidden max-w-7xl mx-auto px-4">
      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-1">
        ADVERTISEMENT
      </span>
      <div className="bg-white/5 border border-white/10 rounded-2xl p-4 min-h-[90px] flex items-center justify-center">
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%' }}
          data-ad-client={client}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive}
        />
      </div>
    </div>
  );
};
