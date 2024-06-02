const config = {
  apiUrl: process.env.REACT_APP_API_URL,
};

const deviseSizes: Record<string, string> = {
  desktop: '1200px',
  tablet: '768px',
  phone: '480px',
} as const;

export {config, deviseSizes};
