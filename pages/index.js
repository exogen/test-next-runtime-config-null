import getConfig from 'next/config';

export default function TestPage() {
  const { publicRuntimeConfig } = getConfig();
  return (
    <main>
      <p>Config: {JSON.stringify(publicRuntimeConfig)}</p>
      <p>bar value: {`${publicRuntimeConfig.bar}`}</p>
      <p>bar in config? {`${'bar' in publicRuntimeConfig}`}</p>
    </main>
  );
}
