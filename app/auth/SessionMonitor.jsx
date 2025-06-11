// app/components/SessionMonitor.js
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { mosyGetLSData } from '../MosyUtils/hiveUtils';

export default function SessionMonitor({ sessionPrefix = 'sauth', loginPath = '/auth/login' }) {
  const router = useRouter();

  useEffect(() => {
    const isLogged = mosyGetLSData(`session_${sessionPrefix}_logged`);

    if (!isLogged) {
      const currentUrl = window.location.href;
      const redirectURL = `${loginPath}?ref_url_go_to=${btoa(currentUrl)}`;
      router.replace(redirectURL);
    }
  }, []);

  return null; // This component just checks, doesn't render anything
}
