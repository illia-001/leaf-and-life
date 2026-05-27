'use client';

import * as amplitude from '@amplitude/unified';

function initAmplitude() {
  const apiKey = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;

  if (typeof window !== 'undefined') {
    if (!apiKey) {
      console.warn('[Amplitude]: NEXT_PUBLIC_AMPLITUDE_API_KEY is missing in your .env file!');
      return;
    }

    amplitude.initAll(apiKey, {"analytics":{"autocapture":true},"sessionReplay":{"sampleRate":1}});
  }
}

initAmplitude();

export const Amplitude = () => null;
export default amplitude;