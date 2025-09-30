import { Helmet as ReactHelmet } from 'react-helmet-async';

interface HelmetProps {
  title?: string;
  description?: string;
}

const DEFAULT_TITLE = 'React Template';
const DEFAULT_DESCRIPTION = 'A modern starter for React + TypeScript using Vite.';

export const Helmet = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION
}: HelmetProps) => (
  <ReactHelmet>
    <title>{title}</title>
    <meta name="description" content={description} />
  </ReactHelmet>
);
