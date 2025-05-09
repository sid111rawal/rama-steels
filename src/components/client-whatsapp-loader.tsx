
'use client';

import dynamic from 'next/dynamic';
import type React from 'react';

// Dynamically import WhatsAppChat, ensuring to get the default export
const DynamicWhatsAppChat = dynamic(() => 
  import('@/components/whatsapp-chat').then(mod => mod.default), 
  {
    ssr: false,
    // Optional: add a loading component if desired
    // loading: () => <div className="fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg bg-gray-200 animate-pulse">Loading Chat...</div>,
  }
);

interface ClientWhatsAppLoaderProps {
  message?: string;
}

const ClientWhatsAppLoader: React.FC<ClientWhatsAppLoaderProps> = ({ message }) => {
  return <DynamicWhatsAppChat message={message} />;
};

export default ClientWhatsAppLoader;
